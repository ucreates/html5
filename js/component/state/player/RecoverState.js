//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Player.RecoverState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.isComplete = false;
    this.timeLine = new Html5.System.TimeLine.Manager();

    var firstFrame = 4;
    var secondFrame = 20;
    var lastFrame = 20;

    this.create = function (paramter) {
        this.timeLine.reset();
        return;
    };

    this.execute = function () {
        if(this.timeLine.isLess(firstFrame)) {
            //position
            var y = Html5.VFX.Easing.linerIn(50,this.timeLine.currentFrame,firstFrame);
            this.owner.position.transformDefault(0,-y);

            //effect
            var entity = this.owner.currentFrameCenterPosition();
            this.owner.effectPowerUp.restoreEntities(entity.x,entity.y);
        }

        if(this.timeLine.isRange(firstFrame,secondFrame)) {
            this.owner.effectRecover1.timeLine.start = true;
            this.owner.effectRecover2.timeLine.start = true;
        }

        if(this.timeLine.isOver(secondFrame) && !this.owner.effectPowerUp.timeLine.start) {
            this.owner.restore();
            this.owner.stateMachine.stop();
            if (!this.owner.isLastPlayer) {
                Html5.System.Notify.NotifyManager.getInstance().notify("nextPlayerAction",this.owner.id + 1);
            } else {
                Html5.System.Notify.NotifyManager.getInstance().notify("nextEnemyAction");
            }
        }
        this.timeLine.goToNextFrame();
        return;
    };
};
