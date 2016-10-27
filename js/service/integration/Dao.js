//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.Integration.Dao = function() {
    this.recordList = new Array();
    this.findById = function(mutipleKeyList) {
        if (0 === this.count()) {
            return null;
        }
        var primaryKey = Direction.Battle.Service.Integration.Schema.Key.generate(mutipleKeyList);
        if (null !== this.recordList[primaryKey]) {
            return this.recordList[primaryKey];
        }
        return null;
    };
    this.findByCreteria = function(criteria) {
    };
    this.save = function(record) {
        record.id = this.count() + 1;
        var primaryKey = record.getPrimaryKey();
        if (null === this.recordList[primaryKey] || undefined === this.recordList[primaryKey]) {
            this.recordList[primaryKey] = record;
            return true;
        }
        return false;
    };
    this.update = function(record) {
        //string primaryKey = record.GetPrimaryKey();
        var primaryKey = "key";
        if (null === this.recordList[primaryKey] || undefined === this.recordList[primaryKey]) {
            this.recordList[primaryKey] = record;
            return true;
        }
        return false;
    };
    this.delete = function(record) {
        var primaryKey = "key";
        if (null !== this.recordList[primaryKey] || undefined !== this.recordList[primaryKey]) {
            delete this.recordList[primaryKey];
            this.recordList[primaryKey] = null;
            return true;
        }
        return false;
    };
    this.clear = function() {
        delete this.recordList;
        this.recordList = new Array();
    };
    this.isEmpty = function() {
        if (0 === Object.keys(this.recordList).length) {
            return true;
        }
        return false;
    };
    this.count = function() {
        return Object.keys(this.recordList).length;
    };
};