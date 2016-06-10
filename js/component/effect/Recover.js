//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Effect.Recover = function(callback,timeline,name,scene,position)
{
    Direction.Battle.Component.Core.call(this,callback,timeline,name,scene);
    this.basePosition = position;
    this.core = null;
    this.sposition = new Array(new Html5.Entity.Position(0,0),new Html5.Entity.Position(0,0),new Html5.Entity.Position(0,0));
    this.ssize = new Array (new Html5.Entity.Size(0,0),new Html5.Entity.Size(0,0),new Html5.Entity.Size(0,0));
    this.isReverse = false;
    var firstframe = 20;

    this.create = function(x,y,isReverse) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/star.png',this.callback);
        this.position.initialize(x,y);
        this.size.initialize(30,30);
        this.align(Html5.Entity.Position.centerPosition());

        if(!isReverse) {
            this.isReverse = false;
        } else {
            this.isReverse = true;
        }

        for(var pos in this.sposition) {
            var obj = this.sposition[pos];
            obj.initialize(this.position.x,this.position.y);
        }

        var i = 1;
        for(var sz in this.ssize) {
            var rate = 1-(i*0.2);
            var obj = this.ssize[sz];
            obj.initialize(this.size.width*rate,this.size.height*rate);
            i++;
        }

        this.alpha = 0;
        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("normal",new Direction.Battle.Component.State.Effect.Recover.NormalState(this));
        stateMachine.add("reverse",new Direction.Battle.Component.State.Effect.Recover.ReverseState(this));
        this.stateMachineList.push(stateMachine);

        if(this.isReverse) {
            this.stateMachineList[0].change("reverse");
        } else {
            this.stateMachineList[0].change("normal");
        }
        this.scene.effectLayer.list.push(this);
    };
 
    this.update = function() {
        if (this.timeLine.equal(1)) {
            if(this.isReverse) {
                this.stateMachineList[0].change("reverse");
            } else {
                this.stateMachineList[0].change("normal");
            }
        }

        if(this.timeLine.isLess(firstframe)) {
            this.alpha = Html5.VFX.Fade.OutIn.create(0.2,this.timeLine.currentFrame)+0.2;
            this.stateMachineList[0].update();
        } else {
            this.restoreZeroAlphaAndStop();
        }
        this.timeLine.goToNextFrame();
    };
 
    this.render = function(canvas) {
        if(!this.timeLine.start) {
            return;
        }
        this.update();
        this.transformWithNode(canvas,this.core.node,this.position,this.size);
        this.transformWithNode(canvas,this.core.node,this.sposition[0],this.ssize[0]);
        this.transformWithNode(canvas,this.core.node,this.sposition[1],this.ssize[1]);
        this.transformWithNode(canvas,this.core.node,this.sposition[2],this.ssize[2]);
    };
};
