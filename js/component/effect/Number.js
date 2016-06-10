//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Effect.Number  = function(callback,timeline,name,scene) {
    Direction.Battle.Component.Core.call(this,callback,timeline,name,scene);
    this.sourcePositions = new Array();
    this.lastFrame = 10;
    this.pdegree = 0;
    this.number = 0;

    this.create = function(x,y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/number.png',this.callback);

        this.position.initialize(x,y);
        this.size.initialize(25,25);
        this.align(Html5.Entity.Position.centerPosition());

        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("parabora",new Direction.Battle.Component.State.Effect.Number.ParaboraState(this));
        stateMachine.add("restore",new Direction.Battle.Component.State.Effect.Number.RestoreState(this));
        this.stateMachineList.push(stateMachine);
        this.scene.effectLayer.list.push(this);
        this.createDegree();

        //initi soucepos
        for(var j = 0;j<2;j++) {
            for(var i = 0;i<5;i++) {
                var pos = new Html5.Entity.Position(this.size.width*i, this.size.height*j);
                this.sourcePositions.push(pos);
            }
        }
        this.timeLine.start = false;
    };

    this.update = function() {
        if (this.timeLine.equal(1)) {
            this.stateMachineList[0].change("parabora");
        }

        if (this.timeLine.equal(this.lastFrame)) {
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

        var figure = Html5.Mathmatics.Figure.figureNumber(this.number);
        var x  = this.position.x;
        var y  = this.position.y;

        if (0 < figure) {
            //1桁目
            var one = Html5.Mathmatics.Figure.getNFigureValue(this.number,1);
            var entity = this.getNumberSourcePosition(one);
            this.transformWithNodeTrimScale(canvas,this.core.node,x,y,entity.x,entity.y,this.size.dwidth,this.size.dheight,this.size.width,this.size.height);
        }

        if (1 < figure) {
            //2桁目
            var two = Html5.Mathmatics.Figure.getNFigureValue(this.number,2);
            var entity = this.getNumberSourcePosition(two);
            this.transformWithNodeTrimScale(canvas,this.core.node,x-this.size.width,y,entity.x,entity.y,this.size.dwidth,this.size.dheight,this.size.width,this.size.height);
        }

        if (2 < figure) {
            //3桁目
            var three = Html5.Mathmatics.Figure.getNFigureValue(this.number,3);
            var entity = this.getNumberSourcePosition(three);
            this.transformWithNodeTrimScale(canvas,this.core.node,x-this.size.width*2,y,entity.x,entity.y,this.size.dwidth,this.size.dheight,this.size.width,this.size.height);
        }
    };
 
    this.getNumberSourcePosition = function(number)
    {
        if(0 !== number) {
            return this.sourcePositions[number-1];
        } else {
            return this.sourcePositions[9];
        }
    };

    this.createInfo = function() {
        this.createDegree();
        this.createNumber();
    };

    this.createNumber = function() {
        this.number = Html5.Mathmatics.Random.range(1,999);
    };

    this.createDegree = function() {
        var val = Html5.Mathmatics.Random.range(1,2);
        if(val === 1) {
            this.pdegree = 80;
        } else {
            this.pdegree = 100;
        }
    };
};
