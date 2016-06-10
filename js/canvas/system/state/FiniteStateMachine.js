//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.State.FiniteStateMachine = function()
{
    this.stateList = new Array();
    this.finiteStateEntity = new Html5.System.State.FiniteStateEntity();
    this.notifyParameter = null;

    this.change = function(newStateName,notifyParamter) {
        this.notifyParamter = notifyParamter;
        var nextState = this.get(newStateName);
        this.finiteStateEntity.update(newStateName,nextState);
    };

    this.update = function() {
        if (false !== this.finiteStateEntity.isNewState) {
            this.finiteStateEntity.state.create(this.notifyParamter);
            this.finiteStateEntity.isNewState = false;
        }
        if (null !== this.finiteStateEntity.state && false === (this.finiteStateEntity.state instanceof Array)) {
            if (false === this.finiteStateEntity.state.isComplete) {
                this.finiteStateEntity.state.execute();
            }
        }
    };

    this.get = function(stateName) {
        return this.stateList[stateName];
    };

    this.add = function(stateName,state) {
        this.stateList[stateName] = state;
    };

    this.play = function() {
        for (var state in this.stateList) {
            this.stateList[state].isComplete = false;
        }
    };

    this.stop = function() {
        for (var state in this.stateList) {
            this.stateList[state].isComplete = true;
        }
    };
};
