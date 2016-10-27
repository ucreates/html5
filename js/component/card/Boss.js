//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Card.Boss = function(callback, timeline, name, scene) {
    Direction.Battle.Component.Core.call(this, callback, timeline, name, scene);
    this.uposition = new Html5.Entity.Position(0, 0);
    this.dposition = new Html5.Entity.Position(0, 0);
    this.tsize = new Html5.Entity.Size(0, 0);
    this.nextPlayer = new Array();
    this.nextEnemy = new Array();
    this.previousName = null;
    this.enemyIndex = 0;
    this.magic = new Array();
    this.damageNumber = new Array();
    this.create = function(x, y, attackDegree) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/boss.png', this.callback);
        //default
        this.position.initialize(x, y);
        this.size.initialize(156, 176);
        this.align(Html5.Entity.Position.centerPosition());
        this.vector.createFromDegree(attackDegree);
        //trim
        this.tsize.initialize(this.size.width, this.size.halfHeight);
        this.uposition.initialize(this.position.x, this.position.y);
        this.dposition.initialize(this.position.x, this.position.y + this.size.halfHeight);
        //blackHole
        var mx = this.scene.canvas.size.halfWidth;
        var my = this.scene.canvas.size.halfHeight;
        this.magic[0] = new Direction.Battle.Component.Effect.BlackHole(this.callback, this.timeline, 'hole', this.scene);
        this.magic[0].create(mx, my);
        for (var i = 0; i < 5; i++) {
            var d = new Direction.Battle.Component.Effect.Number(this.callback, this.timeline, 'damageNumber', this.scene);
            d.lastFrame = 30;
            d.create(this.scene.canvas.size.halfWidth, this.scene.canvas.size.halfHeight - 50);
            this.damageNumber.push(d);
        }
        this.stateMachine.add("attack", new Direction.Battle.Component.State.Boss.AttackState(this));
        this.stateMachine.add("damage", new Direction.Battle.Component.State.Boss.DamageState(this));
        this.stateMachine.add("blackhole", new Direction.Battle.Component.State.Boss.BlackHoleState(this));
        this.stateMachine.add("death", new Direction.Battle.Component.State.Boss.DeathState(this));
        this.stateMachine.stop();
        var nm = Html5.System.Notify.NotifyManager.getInstance();
        nm.notifierList.push(this);
        this.scene.cardLayer.list.push(this);
    };
    this.update = function() {
        if (this.timeline.isLess(this.startFrame)) {
            return;
        }
        this.stateMachine.update();
    };
    this.render = function(canvas, gframe) {
        if (!this.isDrawStart(gframe)) {
            return;
        }
        this.update();
        //死亡以外は普通の描画
        if (!(this.action & Direction.Battle.Component.Card.Boss.Death)) {
            this.transform(canvas);
            //死んでたら一刀両断描画
        } else {
            this.transformWithNodeTrim(canvas, this.core.node, this.uposition.x, this.uposition.y, 0, 0, this.tsize.width, this.tsize.height);
            this.transformWithNodeTrim(canvas, this.core.node, this.dposition.x, this.dposition.y, 0, this.tsize.height, this.tsize.width, this.tsize.height);
        }
        if (!this.stateMachine.get("attack").isComplete) {
            canvas.startShake(5);
        } else {
            canvas.stopShake();
        }
    };
    this.onNotify = function(message, parameter) {
        if ("nextEnemyAction" === message) {
            var threshold = Html5.Mathmatics.Random.range(0, 10);
            if (threshold < 8) {
                this.stateMachine.change("attack");
            } else {
                this.stateMachine.change("blackhole");
            }
            this.stateMachine.play();
        } else if ("playerDamage" === message) {
            for (var player in this.nextEnemy) {
                var obj = this.nextEnemy[player];
                if (obj.id === parameter) {
                    obj.restore();
                    obj.damageNumber.createInfo();
                    obj.stateMachine.change("damage");
                    obj.stateMachine.play();
                }
            }
        } else if ("allPlayerDamage" === message) {
            for (var player in this.nextEnemy) {
                var obj = this.nextEnemy[player];
                obj.restore();
                obj.damageNumber.createInfo();
                obj.stateMachine.change("damage");
                obj.stateMachine.play();
            }
        }
    };
};