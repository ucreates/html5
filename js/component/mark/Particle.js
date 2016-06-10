//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Mark.Particle  = function(callback,timeline,name,scene) {
    Direction.Battle.Component.Core.call(this,callback,timeline,name,scene);
    this.core = new Array();
    this.positions = new Array();
    this.sizes = new Array();

    this.create = function(x,y) {
        this.core[0] = new Html5.Sprite.Static();
        this.core[0].create('./img/particle.png',this.callback);

        this.size.initialize(64, 64);
        this.position.initialize(x, y);
        this.align(Html5.Entity.Position.centerPosition());

        for(var i = 0;i<5;i++) {
            this.sizes[i] = new Html5.Entity.Size(64, 64);
            this.positions[i] = new Html5.Entity.Position(x, y);
        }

        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("circle",new Direction.Battle.Component.State.Mark.Particle.CircleState(this));
        this.stateMachineList.push(stateMachine);

        this.scene.effectLayer.list.push(this);
        this.timeLine.start = true;
    };
 
    this.update = function() {
        if (this.timeLine.equal(0)) {
            this.stateMachineList[0].change("circle");
            this.stateMachineList[0].play();
        }
        this.stateMachineList[0].update();
        this.timeLine.goToNextFrame();
    };
 
    this.render = function(canvas) {
        if(this.timeline.isLess(this.startFrame)) {
            return;
        }
        this.update();
        for (var i=0;i<5;i++) {
            this.transformWithNode(canvas,this.core[0].node,this.positions[i],this.sizes[i]);
        }
    };
};