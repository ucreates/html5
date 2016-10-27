//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.Integration.Table.TBossAttackDataTable = function() {
    Direction.Battle.Service.Integration.Table.BaseTable.call(this);
    this.attackCount = 0;
    this.getPrimaryKey = function() {
        if (0 === this.primaryKey.keyList.length) {
            this.primaryKey.add("id", this.id);
        }
        return this.primaryKey.get();
    };
};