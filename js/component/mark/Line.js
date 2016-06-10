//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Mark.Line  = function(callback,timeline,name,scene) {
    Direction.Battle.Component.Core.call(this,callback,timeline,name,scene);
    var _isNextState = true;
    this.create = function(x,y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/line.png',this.callback);

        this.size.initialize(400,30);
        this.position.initialize(x, y);
        this.align(Html5.Entity.Position.centerPosition());

        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("scale",new Direction.Battle.Component.State.Mark.Line.ScaleState(this));
        stateMachine.add("decline",new Direction.Battle.Component.State.Mark.Line.DeclineState(this));
        this.stateMachineList.push(stateMachine);

        this.scene.effectLayer.list.push(this);
        this.timeLine.setAddRate(0.1)
        this.timeLine.start = true;
    };
 
    this.update = function() {
        if (this.timeLine.equal(0)) {
            this.stateMachineList[0].change("scale");
            this.stateMachineList[0].play();
        }

        if (this.timeLine.isOver(5) && _isNextState) {
            this.stateMachineList[0].change("decline");
            _isNextState = false;
        }
        this.stateMachineList[0].update();
        this.timeLine.goToNextFrame();
    };
 
    this.render = function(canvas) {
        if(this.timeline.isLess(this.startFrame)) {
            return;
        }
        this.update();
        this.transform(canvas);
    };
};