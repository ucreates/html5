//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Mark.Particle.CircleState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.timeLine.setAddRate(0.75);
        return;
    };
    this.execute = function() {
        var frame = this.timeLine.currentFrame;
        var radius = Html5.VFX.Easing.linerOut(420, frame, 6);
        for (var i = 0; i < 5; i++) {
            var diff = i * 0.75;
            //size
            var rate = Html5.VFX.Scale.Decline.linerOut(5, frame - diff, 6);
            this.owner.sizes[i].transformMultiple(rate, rate);
            //position
            var mx = this.owner.scene.canvas.size.halfWidth;
            var my = this.owner.scene.canvas.size.halfHeight;
            var entity = Html5.VFX.Circle.reverse(mx, my, radius, frame - diff);
            entity = this.owner.currentFrameCenterPositionFromEntity(entity);
            this.owner.positions[i].transform(entity.x + this.owner.sizes[i].paddingx, entity.y + this.owner.sizes[i].paddingy);
        }
        this.timeLine.goToNextFrame();
        return;
    };
};