//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Boss.DeathState = function(owner) {
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
        var x = Html5.VFX.Easing.quadraticOut(25,this.timeLine.currentFrame,5);
        this.owner.uposition.transformAdd(x, 0);
        this.owner.dposition.transformAdd(-x, 0);

        //alpha
        this.owner.alpha = Html5.VFX.Fade.Out.linerIn(this.timeLine.currentFrame,5);

        if(this.owner.alpha !== 0) {
            this.timeLine.goToNextFrame();
        }
        return;
    };
};
