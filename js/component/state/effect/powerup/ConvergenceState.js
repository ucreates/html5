//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.PowerUp.ConvergenceState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.lastFrame = 0;
    this.index = 0;
    this.create = function (parameter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.timeLine.setAddRate(1);
        this.lastFrame = parameter["lastFrame"];
        this.index = parameter["index"];
        return;
    };

    this.execute = function () {
        //var currentFrame = this.createFrameDifferent(prevFrame);
        var currentFrame = this.timeLine.currentFrame;
        var x = Html5.VFX.Vector.linerOut(this.owner.vectors[this.index].magnitude,currentFrame,1,this.owner.vectors[this.index].cos);
        var y = Html5.VFX.Vector.linerOut(this.owner.vectors[this.index].magnitude,currentFrame,1,this.owner.vectors[this.index].sin);
        this.owner.positions[this.index].transformAdd(x,y);

        var width = Html5.VFX.Scale.Decline.linerIn(this.owner.sizes[this.index].dwidth,currentFrame,1);
        var height = Html5.VFX.Scale.Decline.linerIn(this.owner.sizes[this.index].dheight,currentFrame,1);
        this.owner.sizes[this.index].transform(width,height);

        if (currentFrame < this.lastFrame) {
            this.timeLine.goToNextFrame();
        }
        return;
    };
};
