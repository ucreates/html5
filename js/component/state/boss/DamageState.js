//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Boss.DamageState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.owner.damageNumber[paramter].createInfo();
        this.owner.damageNumber[paramter].timeLine.start = true;
        return;
    };
    this.execute = function() {
        var shake = Html5.VFX.Shake.Decline.ExponentialOut(15, this.timeLine.currentFrame, 4);
        this.owner.position.transformDefault(shake, shake);
        if (shake == 0) {
            this.owner.stateMachine.stop();
            this.owner.restore();
        } else {
            this.timeLine.goToNextFrame();
        }
        return;
    };
};