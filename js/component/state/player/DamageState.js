//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Player.DamageState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.create = function(paramter) {
        this.timeLine.reset();
        return;
    };
    this.execute = function() {
        var shakeRate = Html5.VFX.Shake.Decline.ExponentialOut(7, this.timeLine.currentFrame, 6);
        this.owner.position.transformDefault(shakeRate, shakeRate);
        this.owner.damageNumber.timeLine.start = true;
        if (shakeRate == 0) {
            this.owner.stateMachine.stop();
            this.owner.restore();
        } else {
            this.timeLine.goToNextFrame();
        }
        return;
    };
};