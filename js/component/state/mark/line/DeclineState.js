//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Mark.Line.DeclineState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.create = function (paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.timeLine.setAddRate(1);
        return;
    };

    this.execute = function () {
        var frame = this.timeLine.currentFrame;
        var rate = Html5.VFX.Scale.Decline.linerOut(9,frame,5);
        this.owner.size.transformMultiple(rate, rate);
        this.owner.position.transformDefault(this.owner.size.paddingx, this.owner.size.paddingy);
        this.timeLine.goToNextFrame();
        return;
    };
};
