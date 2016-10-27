//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.Integration.DataBase = function() {
    this.serviceList = new Array();
    this.registDao = function() {
        this.serviceList["TBossAttackDataTable"] = new Direction.Battle.Service.Integration.Dao();
    }
    this.findServiceByName = function(daoName) {
        if (null !== this.serviceList[daoName]) {
            return this.serviceList[daoName];
        }
        return null;
    };
    this.clear = function() {
        delete this.serviceList;
        this.serviceList = new Array();
    };
};
Direction.Battle.Service.Integration.DataBase.instance = null;
Direction.Battle.Service.Integration.DataBase.getInstance = function() {
    if (null === Direction.Battle.Service.Integration.DataBase.instance) {
        Direction.Battle.Service.Integration.DataBase.instance = new Direction.Battle.Service.Integration.DataBase();
        Direction.Battle.Service.Integration.DataBase.instance.registDao();
    }
    return Direction.Battle.Service.Integration.DataBase.instance;
};