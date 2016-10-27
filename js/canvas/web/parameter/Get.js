//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Web.Parameter.Get = function() {
    this.value = new Array();
    this.toArray = function() {
        var query = window.location.search.substring(1);
        var parms = query.split('&');
        for (var i = 0; i < parms.length; i++) {
            var pos = parms[i].indexOf(' = ');
            if (pos > 0) {
                var key = parms[i].substring(0, pos);
                var val = parms[i].substring(pos + 1);
                this.value[key] = val;
            }
        }
    };
    this.create = function() {
        var param = '?';
        for (key in this.value) {
            var val = this.value[key];
            param += key + ' = ' + val + '&';
        }
        return param;
    };
    this.dump = function() {
        for (key in this.value) {
            var val = this.value[key];
        }
    };
};