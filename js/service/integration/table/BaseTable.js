//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.Integration.Table.BaseTable = function() {
    this.recordList = new Array();
    this.primaryKey = new Direction.Battle.Service.Integration.Schema.Key();
    this.foreignKey = new Direction.Battle.Service.Integration.Schema.Key();
    this.id = -1;
};