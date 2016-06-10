//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.BlackHole.OpenState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;

    var frame1 = 100;
    var frame2 = 10;
    var frame3 = 140;
    var frame4 = 183;

    this.create = function (paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.owner.alpha = 1;
        return;
    };

    this.execute = function () {
        var cf = this.timeLine.currentFrame;
        var width = Html5.VFX.Scale.Increase.linerOut(5,cf,15)+1;
        var height = Html5.VFX.Scale.Increase.linerOut(5,cf,15)+1;
        this.owner.size.transformMultiple(width,height);
        this.owner.position.transformDefault(this.owner.size.paddingx,this.owner.size.paddingy);
        this.owner.alpha = Html5.VFX.Fade.OutIn.create(0.1,this.timeLine.currentFrame) * 0.8;
        if (cf < frame1) {
            this.timeLine.currentFrame++;
        }
        return;
    };
};
