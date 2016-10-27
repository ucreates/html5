//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.PowerUp.CircleState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    var firstFrame = 0.9;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.timeLine.setAddRate(0.3);
        return;
    };
    this.execute = function() {
        var radius = Html5.VFX.Easing.linerOut(200, this.timeLine.currentFrame, firstFrame) + 50;
        var frameRate = 1.2;
        for (var i = 0; i < this.owner.positions.length; i++) {
            var cf = this.timeLine.currentFrame + frameRate + frameRate * i;
            var entity = Html5.VFX.Circle.normal(this.owner.positions[i].dx, this.owner.positions[i].dy, radius, cf);
            this.owner.positions[i].transform(entity.x, entity.y);
            this.owner.vectors[i].createFromPoint(entity.x, entity.y, this.owner.positions[i].dx, this.owner.positions[i].dy);
        }
        this.owner.alpha = Html5.VFX.Fade.In.ExponentialIn(this.timeLine.currentFrame, 0.6) * 0.5 + 0.5;
        if (this.timeLine.isLess(firstFrame)) {
            this.timeLine.goToNextFrame();
        }
        return;
    };
};