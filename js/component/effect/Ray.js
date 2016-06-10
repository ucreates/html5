//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Effect.Ray = function(callback,timeline,name,scene)
{
    Direction.Battle.Component.Core.call(this,callback,timeline,name,scene);
    var firstFrame = 15;
    var secondFrame = 21;

    this.create = function(x,y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/ray.png',this.callback);
        this.position.initialize(x,y);
        this.size.initialize(44,97);
        this.align(Html5.Entity.Position.centerPosition());

        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("firstScale",new Direction.Battle.Component.State.Effect.Ray.FirstScaleState(this));
        stateMachine.add("secondScale",new Direction.Battle.Component.State.Effect.Ray.SecondScaleState(this));
        stateMachine.add("restore",new Direction.Battle.Component.State.Effect.Ray.RestoreState(this));
        this.stateMachineList.push(stateMachine);
        this.alpha = 0;
        this.scene.effectLayer.list.push(this);
        this.timeLine.start = false;
    };
 
    this.update = function() {
        if (this.timeLine.equal(1)) {
            this.stateMachineList[0].change("firstScale");
        } else if (this.timeLine.equal(firstFrame)) {
            this.stateMachineList[0].change("secondScale");
        } else if (this.timeLine.equal(secondFrame)) {
            this.stateMachineList[0].change("restore");
        }
        this.stateMachineList[0].update();
        this.timeLine.goToNextFrame();
    };
 
    this.render = function(canvas) {
        if(!this.timeLine.start){
            return;
        }
        this.update();
        this.transform(canvas);
    };
};
