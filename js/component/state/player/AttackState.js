//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Player.AttackState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    var totalFrame = 4;
    this.create = function (paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        return;
    };

    this.execute = function () {
        //position
        var x = Html5.VFX.Bouncy.linerOut(40,this.timeLine.currentFrame,totalFrame,this.owner.vector.cos);
        var y = Html5.VFX.Bouncy.linerOut(40,this.timeLine.currentFrame,totalFrame,this.owner.vector.sin);
        this.owner.position.transformAdd(x,y);

        if(this.timeLine.currentFrame == totalFrame - 2) {
            this.owner.effectSword.timeLine.start = true;
            Html5.System.Notify.NotifyManager.getInstance().notify("enemyDamage");
        }

        if(this.timeLine.currentFrame > totalFrame - 1) {
            this.owner.stateMachine.stop();
            if (!this.owner.isLastPlayer) {
                Html5.System.Notify.NotifyManager.getInstance().notify("nextPlayerAction",this.owner.id + 1);
            } else {
                Html5.System.Notify.NotifyManager.getInstance().notify("nextEnemyAction");
            }
        }

        if(y == 0) {
            this.owner.restore();
            this.owner.stateMachine.stop();
        } else {
            this.timeLine.goToNextFrame();
        }

        return;
    };
};
