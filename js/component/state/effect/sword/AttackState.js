//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.Sword.AttackState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;

    this.create = function (paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        return;
    };

    this.execute = function () {
        var yrate = Html5.VFX.Scale.Increase.linerOut(1,this.timeLine.currentFrame,3);
        var xrate = Html5.VFX.Scale.Increase.linerOut(1,this.timeLine.currentFrame,3);
        this.owner.size.transformMultiple(xrate,yrate);
        this.owner.alpha = 1;
        this.timeLine.goToNextFrame();
        return;
    };
};
