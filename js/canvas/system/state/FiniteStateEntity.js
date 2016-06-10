//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.State.FiniteStateEntity = function()
{
    this.state = Array();
    this.currentStateName = null;
    this.previousStateName = null;
    this.nextStateName = null;
    this.isNewState = false;

    this.update = function(nextStateName, nextState) {
        this.previousStateName = this.currentStateName;
        this.currentStateName = nextStateName;
        this.state = nextState;
        this.isNewState =  true;
    };
};
