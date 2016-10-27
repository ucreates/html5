//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.BizLogic.BossBizLogic = function() {
    Direction.Battle.Service.BizLogic.BaseBizLogic.call(this);
    var dataBase = Direction.Battle.Service.Integration.DataBase.getInstance();
    var dao = dataBase.findServiceByName("TBossAttackDataTable");
    if (false !== dao.isEmpty()) {
        dao.save(new Direction.Battle.Service.Integration.Table.TBossAttackDataTable());
    }
    this.getCurrentAttackCount = function() {
        var dataBase = Direction.Battle.Service.Integration.DataBase.getInstance();
        var dao = dataBase.findServiceByName("TBossAttackDataTable");
        var table = dao.findById([1]);
        return table.attackCount;
    };
    this.updateCurrentAttackCount = function() {
        var dataBase = Direction.Battle.Service.Integration.DataBase.getInstance();
        var dao = dataBase.findServiceByName("TBossAttackDataTable");
        var table = dao.findById([1]);
        table.attackCount++;
        dao.update(table);
        return;
    };
    this.clearCurrentAttackCount = function() {
        var dataBase = Direction.Battle.Service.Integration.DataBase.getInstance();
        var dao = dataBase.findServiceByName("TBossAttackDataTable");
        var table = dao.findById([1]);
        table.attackCount = 0;
        dao.update(table);
        return;
    };
};