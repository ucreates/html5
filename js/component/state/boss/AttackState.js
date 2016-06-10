//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Boss.AttackState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    var lastframe = 5;
    var _enemyId = 0;

    this.create = function (paramter) {
        this.isComplete = false;
        this.timeLine.reset();

        var enemyIndex = Html5.Mathmatics.Random.range(0,this.owner.nextEnemy.length - 1);
        var degree = 0;
        if(enemyIndex == 0) {
            degree = 240;
        } else if(enemyIndex == 1) {
            degree = 270;
        } else if(enemyIndex == 2) {
            degree = 310;
        } else if(enemyIndex == 3) {
            degree = 330;
        } else if(enemyIndex == 4) {
            degree = 210;
        }
        this.owner.vector.createFromDegree(degree);
        _enemyId = enemyIndex + 1;
        return;
    };

    this.execute = function () {
        if (false !== this.isComplete) {
            return;
        }
        //position
        var x = Html5.VFX.Bouncy.linerOut(60,this.timeLine.currentFrame,lastframe,this.owner.vector.cos);
        var y = Html5.VFX.Bouncy.linerOut(60,this.timeLine.currentFrame,lastframe,this.owner.vector.sin);
        this.owner.position.transformAdd(x,y);

        if(this.timeLine.equal(lastframe - 3)) {
            var val = Html5.Mathmatics.Random.range(0,4);
            if(2 >= val) {
                Html5.System.Notify.NotifyManager.getInstance().notify("playerDamage",_enemyId);
            } else {
                Html5.System.Notify.NotifyManager.getInstance().notify("playerDamage",_enemyId);
            }
        }

        if(this.timeLine.equal(lastframe)) {
            this.owner.stateMachine.stop();
            this.owner.restore();
            var service = Direction.Battle.Service.ServiceGateway.getInstance();
            var ret = service.findServiceByDomainSchema("boss/attackState").update();
            if (false !== ret["is_success"]) {
                if (false !== ret["is_next_attack"]) {
                    Html5.System.Notify.NotifyManager.getInstance().notify("nextEnemyAction");
                } else {
                    Html5.System.Notify.NotifyManager.getInstance().notify("nextPlayerAction",1);
                }
            }
        } else {
            this.timeLine.goToNextFrame();
        }
        return;
    };
};
