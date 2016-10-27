//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.Recover.NormalState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    var secondFrame = 1;
    var thirdFrame = 2;
    var forthFrame = 3;
    var radius = 50;
    var rate = 0.75;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        return;
    };
    this.execute = function() {
        var frame = this.timeLine.currentFrame;
        var x = this.owner.basePosition.x;
        var y = this.owner.basePosition.y;
        var entity = Html5.VFX.Sprine.Eight.create(x, y, radius, rate, frame);
        this.owner.position.transform(entity.x, entity.y / 2);
        var entity = Html5.VFX.Sprine.Eight.create(x, y, radius, rate, frame - secondFrame);
        this.owner.sposition[0].transform(entity.x, entity.y / 2);
        var entity = Html5.VFX.Sprine.Eight.create(x, y, radius, rate, frame - thirdFrame);
        this.owner.sposition[1].transform(entity.x, entity.y / 2);
        var entity = Html5.VFX.Sprine.Eight.create(x, y, radius, rate, frame - forthFrame);
        this.owner.sposition[2].transform(entity.x, entity.y / 2);
        this.timeLine.goToNextFrame();
        return;
    };
};