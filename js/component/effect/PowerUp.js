//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Effect.PowerUp = function(callback, timeline, name, scene) {
    Direction.Battle.Component.Core.call(this, callback, timeline, name, scene);
    this.positions = new Array(new Html5.Entity.Position(0, 0), new Html5.Entity.Position(0, 0), new Html5.Entity.Position(0, 0), new Html5.Entity.Position(0, 0), new Html5.Entity.Position(0, 0));
    this.vectors = new Array(new Html5.Mathmatics.Vector(), new Html5.Mathmatics.Vector(), new Html5.Mathmatics.Vector(), new Html5.Mathmatics.Vector(), new Html5.Mathmatics.Vector());
    this.sizes = new Array(new Html5.Entity.Size(0, 0), new Html5.Entity.Size(0, 0), new Html5.Entity.Size(0, 0), new Html5.Entity.Size(0, 0), new Html5.Entity.Size(0, 0));
    this.scene = scene;
    this.ray = null;
    this.changedStatusList = new Array();
    this.create = function(x, y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/attack_effect.png', this.callback);
        this.position.initialize(x, y);
        this.size.initialize(24, 24);
        this.align(Html5.Entity.Position.centerPosition());
        for (var pos in this.positions) {
            var obj = this.positions[pos];
            //上でalignをしているので引数をそのまま代入するとずれてしまう。よって初期化ずみの位置を代入
            obj.initialize(this.position.x, this.position.y);
        }
        for (var size in this.sizes) {
            var obj = this.sizes[size];
            //上でalignをしているので引数をそのまま代入するとずれてしまう。よって初期化ずみの位置を代入
            obj.initialize(this.size.width, this.size.height);
        }
        this.timeLine.setAddRate(0.3);
        var stateMachine = new Html5.System.State.FiniteStateMachine();
        stateMachine.add("circle", new Direction.Battle.Component.State.Effect.PowerUp.CircleState(this));
        stateMachine.add("convergence1", new Direction.Battle.Component.State.Effect.PowerUp.ConvergenceState(this));
        stateMachine.add("restore", new Direction.Battle.Component.State.Effect.PowerUp.RestoreState(this));
        this.stateMachineList.push(stateMachine);
        var stateMachine2 = new Html5.System.State.FiniteStateMachine();
        stateMachine2.add("convergence2", new Direction.Battle.Component.State.Effect.PowerUp.ConvergenceState(this));
        stateMachine2.add("convergence3", new Direction.Battle.Component.State.Effect.PowerUp.ConvergenceState(this));
        stateMachine2.add("convergence4", new Direction.Battle.Component.State.Effect.PowerUp.ConvergenceState(this));
        stateMachine2.add("convergence5", new Direction.Battle.Component.State.Effect.PowerUp.ConvergenceState(this));
        this.stateMachineList.push(stateMachine2);
        for (var i = 0; i < 6; i++) {
            this.changedStatusList[i] = false;
        }
        this.scene.effectLayer.list.push(this);
        this.timeLine.start = false;
    };
    this.update = function() {
        var firstFrame = 0.9;
        var secondFrame = 4.8;
        var thirdFrame = secondFrame + 1;
        var forthFrame = secondFrame + 1 * 2;
        var fifthFrame = secondFrame + 1 * 3;
        var sixFrame = secondFrame + 1 * 4;
        var seventhFrame = secondFrame + 1 * 5;
        if (this.timeLine.equal(0)) {
            this.stateMachineList[0].change("circle");
        }
        if (this.timeLine.isOver(secondFrame) && false === this.changedStatusList[0]) {
            var param = new Array();
            param["lastFrame"] = 3;
            param["index"] = 0;
            this.stateMachineList[0].change("convergence1", param);
            this.changedStatusList[0] = true;
        }
        if (this.timeLine.isOver(thirdFrame) && false === this.changedStatusList[1]) {
            var param = new Array();
            param["lastFrame"] = 3;
            param["index"] = 1;
            this.stateMachineList[1].change("convergence2", param);
            this.changedStatusList[1] = true;
        }
        if (this.timeLine.isOver(forthFrame) && false === this.changedStatusList[2]) {
            var param = new Array();
            param["lastFrame"] = 3;
            param["index"] = 2;
            this.stateMachineList[1].change("convergence3", param);
            this.changedStatusList[2] = true;
        }
        if (this.timeLine.isOver(fifthFrame) && false === this.changedStatusList[3]) {
            var param = new Array();
            param["lastFrame"] = 3;
            param["index"] = 3;
            this.stateMachineList[1].change("convergence4", param);
            this.changedStatusList[3] = true;
        }
        if (this.timeLine.isOver(sixFrame) && false === this.changedStatusList[4]) {
            var param = new Array();
            param["lastFrame"] = 3;
            param["index"] = 4;
            this.stateMachineList[1].change("convergence5", param);
            this.changedStatusList[4] = true;
        }
        if (this.timeLine.isOver(seventhFrame) && false === this.changedStatusList[5]) {
            this.stateMachineList[0].change("restore");
            this.changedStatusList[5] = true;
        }
        for (var stateMachine in this.stateMachineList) {
            this.stateMachineList[stateMachine].update();
        }
        this.timeLine.goToNextFrame();
    };
    this.render = function(canvas) {
        if (!this.timeLine.start) {
            return;
        }
        this.update();
        this.transformWithNode(canvas, this.core.node, this.positions[0], this.sizes[0]);
        this.transformWithNode(canvas, this.core.node, this.positions[1], this.sizes[1]);
        this.transformWithNode(canvas, this.core.node, this.positions[2], this.sizes[2]);
        this.transformWithNode(canvas, this.core.node, this.positions[3], this.sizes[3]);
        this.transformWithNode(canvas, this.core.node, this.positions[4], this.sizes[4]);
    };
    this.restoreEntities = function(x, y) {
        this.position.initialize(x, y);
        this.align(Html5.Entity.Position.centerPosition());
        for (var pos in this.positions) {
            var obj = this.positions[pos];
            //上でalignをしているので引数をそのまま代入するとずれてしまう。よって初期化ずみの位置を代入
            obj.initialize(this.position.x, this.position.y);
        }
        for (var i = 0; i < 6; i++) {
            this.changedStatusList[i] = false;
        }
        this.timeLine.gotoStart();
    };
};