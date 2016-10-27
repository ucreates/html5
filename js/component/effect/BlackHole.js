//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Effect.BlackHole = function(callback, timeline, name, scene) {
    Direction.Battle.Component.Core.call(this, callback, timeline, name, scene);
    this.positions = new Array();
    this.sizes = new Array();
    this.elementCount = 10;
    this.currentElementCount = 1;
    this.nextElementAppearFrame = 10;
    this.ray = null;
    this.flushRadius = 0;
    var frame1 = 100;
    var frame2 = 10;
    var frame3 = 140;
    var frame4 = 183;
    var frame5 = 223;
    this.create = function(x, y) {
        this.core = new Array();
        this.core[0] = new Html5.Sprite.Static();
        this.core[0].create('./img/black_hole.png', this.callback);
        this.core[1] = new Html5.Sprite.Static();
        this.core[1].create('./img/flare.png', this.callback);
        this.position.initialize(x, y);
        this.size.initialize(24 * 2, 24 * 2);
        this.align(Html5.Entity.Position.centerPosition());
        for (var i = 0; i < this.elementCount; i++) {
            this.positions.push(new Html5.Entity.Position(0, 0));
            this.sizes.push(new Html5.Entity.Size(0, 0));
        }
        for (var pos in this.positions) {
            var obj = this.positions[pos];
            //上でalignをしているので引数をそのまま代入するとずれてしまう。よって初期化ずみの位置を代入
            obj.initialize(this.position.x, this.position.y);
        }
        for (var size in this.sizes) {
            var obj = this.sizes[size];
            //上でalignをしているので引数をそのまま代入するとずれてしまう。よって初期化ずみの位置を代入
            obj.initialize(50, 50);
            obj.transform(0, 0);
        }
        var stateMachine1 = new Html5.System.State.FiniteStateMachine();
        stateMachine1.add("open", new Direction.Battle.Component.State.Effect.BlackHole.OpenState(this));
        stateMachine1.add("close", new Direction.Battle.Component.State.Effect.BlackHole.CloseState(this));
        stateMachine1.add("flash", new Direction.Battle.Component.State.Effect.BlackHole.FlashState(this));
        var stateMachine2 = new Html5.System.State.FiniteStateMachine();
        stateMachine2.add("circle", new Direction.Battle.Component.State.Effect.BlackHole.CircleState(this));
        this.stateMachineList.push(stateMachine1);
        this.stateMachineList.push(stateMachine2);
        this.scene.effectLayer.list.push(this);
        this.timeLine.start = false;
    };
    this.update = function() {
        if (this.timeLine.equal(1)) {
            this.stateMachineList[0].change("open");
            this.stateMachineList[0].play();
        }
        if (this.timeLine.equal(frame2)) {
            this.stateMachineList[1].change("circle");
            this.stateMachineList[1].play();
        }
        if (this.timeLine.equal(frame3)) {
            this.stateMachineList[0].change("flash");
        }
        if (this.timeLine.equal(frame4)) {
            this.stateMachineList[0].change("close");
        }
        if (this.timeLine.equal(frame5)) {
            for (var stateMachine in this.stateMachineList) {
                this.stateMachineList[stateMachine].stop();
            }
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
        this.transformWithNode(canvas, this.core[0].node, this.position, this.size);
        for (var i = 0; i < this.elementCount; i++) {
            this.transformWithNode(canvas, this.core[1].node, this.positions[i], this.sizes[i]);
        }
        if (this.timeLine.isRange(frame3, frame4)) {
            canvas.startShake(20);
        } else {
            canvas.stopShake();
        }
        canvas.context.fillStyle = "white";
        canvas.context.beginPath();
        canvas.context.arc(canvas.size.halfWidth, canvas.size.halfHeight, this.flushRadius, Html5.Mathmatics.Radian.createFromDegree(0), Html5.Mathmatics.Radian.createFromDegree(360), false);
        canvas.context.fill();
    };
    this.restoreEntities = function() {
        this.currentElementCount = 1;
        this.nextElementAppearFrame = 10;
        for (var pos in this.positions) {
            var obj = this.positions[pos];
            //上でalignをしているので引数をそのまま代入するとずれてしまう。よって初期化ずみの位置を代入
            obj.restore();
        }
        for (var size in this.sizes) {
            var obj = this.sizes[size];
            obj.restore();
            obj.transform(0, 0);
        }
    };
};