//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.BlackHole.CloseState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    var lastFrame = 40;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        return;
    };
    this.execute = function() {
        this.owner.flushRadius = 0;
        var cf = this.timeLine.currentFrame;
        var width = Html5.VFX.Scale.Decline.linerOut(5, cf, 15);
        var height = Html5.VFX.Scale.Decline.linerOut(5, cf, 15);
        this.owner.size.transformMultiple(width, height);
        this.owner.position.transformDefault(this.owner.size.paddingx, this.owner.size.paddingy);
        if (width <= 0) {
            this.owner.restoreZeroAlphaAndStop();
            this.owner.restoreEntities();
        }
        if (this.timeLine.currentFrame !== lastFrame) {
            this.timeLine.goToNextFrame();
        } else {
            this.isComplete = true;
        }
        return;
    };
};