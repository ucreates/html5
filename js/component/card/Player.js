//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Card.Player = function(callback, timeLine, name, id, last, scene) {
    Direction.Battle.Component.Core.call(this, callback, timeLine, name, scene);
    this.uposition = new Html5.Entity.Position(0, 0);
    this.dposition = new Html5.Entity.Position(0, 0);
    this.tsize = new Html5.Entity.Size(0, 0);
    this.nextPlayer = new Array();
    this.nextEnemy = new Array();
    this.isLastPlayer = last;
    this.id = id;
    this.effectPowerUp = null;
    this.effectPowerUpRay = null;
    this.effectRecover1 = null;
    this.effectRecover2 = null;
    this.effectSword = null;
    this.damageNumber = null;
    this.enableEmitAttack = false;
    this.create = function(x, y, attackDegree) {
        var sx = this.scene.canvas.size.width;
        var sy = this.scene.canvas.size.height;
        var mx = this.scene.canvas.size.halfWidth;
        var my = this.scene.canvas.size.halfHeight;
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/' + this.id + '.png', this.callback);
        //default
        this.position.initialize(x, y);
        this.size.initialize(64, 64);
        this.align(Html5.Entity.Position.centerPosition());
        this.vector.createFromDegree(attackDegree);
        //trim
        this.tsize.initialize(this.size.width, this.size.halfHeight);
        this.uposition.initialize(this.position.x, this.position.y);
        this.dposition.initialize(this.position.x, this.position.y + this.size.halfHeight);
        this.effectPowerUpRay = new Direction.Battle.Component.Effect.Ray(this.callback, this.timeLine, 'ray', this.scene);
        this.effectPowerUpRay.create(this.position.x + this.size.halfWidth, this.position.y + this.size.halfHeight);
        this.effectPowerUp = new Direction.Battle.Component.Effect.PowerUp(this.callback, this.timeLine, 'powerup' + this.id, this.scene);
        this.effectPowerUp.create(this.position.x + this.size.halfWidth, this.position.y + this.size.halfHeight);
        var recoverPosition = null;
        if (1 === this.id) {
            recoverPosition = new Html5.Entity.Position(this.position.x + this.size.halfWidth / 2, this.position.y + 275);
        } else if (2 === this.id) {
            recoverPosition = new Html5.Entity.Position(this.position.x + this.size.halfWidth / 2, this.position.y + 300);
        } else if (3 === this.id) {
            recoverPosition = new Html5.Entity.Position(this.position.x + this.size.halfWidth / 2, this.position.y + 275);
        } else if (4 === this.id) {
            recoverPosition = new Html5.Entity.Position(this.position.x + this.size.halfWidth / 2, this.position.y + 185);
        } else if (5 === this.id) {
            recoverPosition = new Html5.Entity.Position(this.position.x + this.size.halfWidth / 2, this.position.y + 185);
        }
        this.effectRecover1 = new Direction.Battle.Component.Effect.Recover(this.callback, this.timeLine, 'recover' + this.id, this.scene, recoverPosition);
        this.effectRecover1.create(this.position.x + this.size.halfWidth, this.position.y + this.size.halfHeight, false);
        this.effectRecover2 = new Direction.Battle.Component.Effect.Recover(this.callback, this.timeLine, 'recover' + this.id, this.scene, recoverPosition);
        this.effectRecover2.create(this.position.x + this.size.halfWidth, this.position.y + this.size.halfHeight, true);
        this.effectSword = new Direction.Battle.Component.Effect.Attack(this.callback, this.timeLine, 'sword', this.scene);
        this.effectSword.create(mx, my - 100);
        this.damageNumber = new Direction.Battle.Component.Effect.Number(this.callback, this.timeLine, 'damageNumber', this.scene);
        this.damageNumber.lastFrame = 30;
        this.damageNumber.create(x, y);
        this.stateMachine.add("attack", new Direction.Battle.Component.State.Player.AttackState(this));
        this.stateMachine.add("damage", new Direction.Battle.Component.State.Player.DamageState(this));
        this.stateMachine.add("powerup", new Direction.Battle.Component.State.Player.PowerUpState(this));
        this.stateMachine.add("recover", new Direction.Battle.Component.State.Player.RecoverState(this));
        this.stateMachine.add("death", new Direction.Battle.Component.State.Player.DeathState(this));
        this.stateMachine.play();
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
        if ("death" !== this.stateMachine.finiteStateEntity.currentStateName) {
            this.transform(canvas);
        } else {
            this.transformWithNodeTrim(canvas, this.core.node, this.uposition.x, this.uposition.y, 0, 0, this.tsize.width, this.tsize.height);
            this.transformWithNodeTrim(canvas, this.core.node, this.dposition.x, this.dposition.y, 0, this.tsize.height, this.tsize.width, this.tsize.height);
        }
    };
    this.onNotify = function(message, parameter) {
        if ("nextPlayerAction" === message) {
            for (var player in this.nextPlayer) {
                var gameObject = this.nextPlayer[player];
                if (gameObject.id === parameter) {
                    gameObject.restore();
                    var nextPlayerActionId = Html5.Mathmatics.Random.range(0, 10);
                    if (1 == nextPlayerActionId) {
                        gameObject.stateMachine.change("powerup");
                    } else if (2 == nextPlayerActionId) {
                        gameObject.stateMachine.change("recover");
                    } else {
                        this.enableEmitAttack = true;
                        gameObject.stateMachine.change("attack");
                    }
                    gameObject.stateMachine.play();
                }
                break;
            }
        } else if ("enemyDamage" === message) {
            if (!this.enableEmitAttack) {
                return;
            }
            this.enableEmitAttack = false;
            for (var enemy in this.nextEnemy) {
                var gameObject = this.nextEnemy[enemy];
                var damageAnimationIndex = this.id - 1;
                gameObject.stateMachine.change("damage", damageAnimationIndex);
                gameObject.stateMachine.play();
            }
        }
    };
};