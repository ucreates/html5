//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Web.Parameter.Post = function() {
    this.value = new Array();
    this.add = function(key, value) {
        this.value[key] = value;
    };
    this.dump = function() {
        for (var key in this.value) {}
    };
};