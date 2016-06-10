//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.Strategy.BossAttackStateStrategy = function() {

    this.update = function(parameter) {
        var ret = new Array();
        var bizlogic = new Direction.Battle.Service.BizLogic.BossBizLogic();
        var count = bizlogic.getCurrentAttackCount();
        if (count < 1) {
            bizlogic.updateCurrentAttackCount();
            ret["is_next_attack"] = true;
        } else {
            bizlogic.clearCurrentAttackCount();
            ret["is_next_attack"] = false;
        }
        ret["is_success"] = true;
        return ret;
    };

};