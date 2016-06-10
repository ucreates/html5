//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.BlackHole.FlashState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    var lastFrame = 43;
    this.create = function (paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.alpha = 1;
        return;
    };

    this.execute = function () {
        this.owner.alpha = 1;
        var cf = this.timeLine.currentFrame;
        this.owner.flushRadius = Html5.VFX.Sin.curveZeroToPlus(0.075,cf)*600;
        if (this.timeLine.currentFrame !== lastFrame) {
            this.timeLine.goToNextFrame();
        } else {
            this.isComplete = true;
        }
        return;
    };
};
