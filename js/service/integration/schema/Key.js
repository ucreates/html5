//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.Integration.Schema.Key = function() {
    this.keyList = new Array();
    this.get = function() {
        var generateKey = null;
        var length = Object.keys(this.keyList).length - 1;
        var cidx = 0;
        for (var key in this.keyList) {
            var key = this.keyList[key];
            generateKey += key;
            if (cidx != length) {
                generateKey += "-";
            }
            cidx++;
        }
        return generateKey;
    };
    this.add = function(key, value) {
        if (null === this.keyList[key] || undefined === this.keyList[key]) {
            this.keyList[key] = value;
            return true;
        }
        return false;
    };
};
Direction.Battle.Service.Integration.Schema.Key.generate = function(keyList) {
    var generateKey = null;
    var length = Object.keys(keyList).length - 1;
    var cidx = 0;
    for (var key in keyList) {
        var key = keyList[key];
        generateKey += key;
        if (cidx != length) {
            generateKey += "-";
        }
        cidx++;
    }
    return generateKey;
};