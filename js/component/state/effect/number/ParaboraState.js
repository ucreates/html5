//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.Number.ParaboraState = function(owner) {
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
        //alpha
        this.owner.alpha = 1;
        //position
        var entity = Html5.Phisix.Parabora.create(5.5, 0, this.owner.pdegree, this.timeLine.currentFrame);
        var x = entity.x;
        var y = entity.y;
        this.owner.position.transformAdd(x, y);
        //scale
        var rate = Html5.VFX.Scale.Loop.create(1.2, this.timeLine.currentFrame);
        this.owner.size.transformMultiple(rate, rate);
        this.timeLine.goToNextFrame();
        return;
    };
};