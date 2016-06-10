//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.BossService = function() {
    Direction.Battle.Service.BaseService.call(this);
    this.createStrategy = function(strategyName) {
        var strategy = null;
        switch (strategyName) {
            case "attackState":
                strategy = new Direction.Battle.Service.Strategy.BossAttackStateStrategy();
                break;
            default:
                break;
        }
        return strategy;
    };
};