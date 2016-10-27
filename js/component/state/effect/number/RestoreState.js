//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.Number.RestoreState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.create = function(paramter) {
        this.isComplete = false;
        this.owner.restoreZeroAlphaAndStop();
        this.owner.timeLine.reset();
        this.owner.timeLine.start = false;
        return;
    };
    this.execute = function() {
        return;
    };
};