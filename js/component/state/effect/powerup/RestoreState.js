//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.PowerUp.RestoreState = function(owner) {
    Html5.System.State.FiniteState.call(this);
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;

    this.create = function (paramter) {
        this.isComplete = true;
        for (var stateMachine in this.owner.stateMachineList) {
            this.owner.stateMachineList[stateMachine].stop();
        }

        this.owner.timeLine.reset();
        this.owner.timeLine.setAddRate(0.3);
        this.owner.timeLine.gotoStart();
        for(var pos in this.owner.positions) {
            var obj = this.owner.positions[pos];
            obj.restore();
        }

        for(var size in this.owner.sizes) {
            var obj = this.owner.sizes[size];
            obj.restore();
        }
        this.owner.restore();
        this.owner.alpha = 0;
        this.owner.timeLine.start = false;
        return;
    };
};
