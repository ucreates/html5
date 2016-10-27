//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Boss.BlackHoleState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.isNotifyPlayer = false;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        return;
    };
    this.execute = function() {
        if (this.timeLine.isRange(0, 1)) {
            this.owner.magic[0].timeLine.start = true;
        }
        if (!this.owner.magic[0].timeLine.start) {
            if (!this.isNotifyPlayer) {
                this.isNotifyPlayer = true;
            }
            if (this.enableNotifyNextPlayerAction()) {
                this.owner.restore();
                this.owner.stateMachine.stop();
                var service = Direction.Battle.Service.ServiceGateway.getInstance();
                var ret = service.findServiceByDomainSchema("boss/attackState").update();
                if (false !== ret["is_success"]) {
                    if (false !== ret["is_next_attack"]) {
                        Html5.System.Notify.NotifyManager.getInstance().notify("allPlayerDamage");
                        Html5.System.Notify.NotifyManager.getInstance().notify("nextEnemyAction");
                    } else {
                        Html5.System.Notify.NotifyManager.getInstance().notify("allPlayerDamage");
                        Html5.System.Notify.NotifyManager.getInstance().notify("nextPlayerAction", 1);
                    }
                }
            }
        } else {
            this.timeLine.goToNextFrame();
        }
        return;
    };
    this.enableNotifyNextPlayerAction = function() {
        var num = 0;
        for (var enemy in this.owner.nextEnemy) {
            var obj = this.owner.nextEnemy[enemy];
            if (obj.stateMachine.finiteStateEntity.state.isComplete) {
                num++;
            }
        }
        if (num == this.owner.nextEnemy.length) {
            return true;
        }
        return false;
    };
};