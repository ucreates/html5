//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Effect.Attack = function(callback,timeline,name,scene) {
    Direction.Battle.Component.Core.call(this,callback,timeline,name,scene);
    this.create = function(x,y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/sword.png',this.callback);

        this.position.initialize(x,y);
        this.size.initialize(256,256);
        this.align(Html5.Entity.Position.centerPosition());
        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("attack",new Direction.Battle.Component.State.Effect.Sword.AttackState(this));
        stateMachine.add("restore",new Direction.Battle.Component.State.Effect.Sword.RestoreState(this));
        this.stateMachineList.push(stateMachine);

        this.scene.effectLayer.list.push(this);
        this.timeLine.start = false;
    };
 
    this.update = function() {
        if(this.timeLine.equal(1)) {
            this.stateMachineList[0].change("attack");
        } else if (this.timeLine.equal(5)) {
            this.stateMachineList[0].change("restore");
        }
        this.stateMachineList[0].update();
        this.timeLine.goToNextFrame();
    };
 
    this.render = function(canvas) {
        if(!this.timeLine.start) {
            return;
        }
        this.update();
        this.transformWithNodeTrim(canvas,this.core.node,this.position.x,this.position.y,0,0,this.size.width,this.size.height);
    };
};
