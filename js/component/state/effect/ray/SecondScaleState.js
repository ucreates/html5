//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.Ray.SecondScaleState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        return;
    };
    this.execute = function() {
        var currentFrame = this.timeLine.currentFrame;
        var yrate = Html5.VFX.Scale.Increase.linerOut(10, this.timeLine.currentFrame + 15, 7);
        var xrate = Html5.VFX.Scale.Decline.linerOut(2, currentFrame, 4);
        this.owner.size.transformMultiple(xrate, yrate);
        this.owner.position.transformDefault(this.owner.size.paddingx, this.owner.size.paddingy)
        this.owner.alpha = Html5.VFX.Fade.Out.linerIn(currentFrame, 4) * 0.7;
        this.timeLine.goToNextFrame();
        return;
    };
};