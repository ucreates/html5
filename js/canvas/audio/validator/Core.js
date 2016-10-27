//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Audio.Validator.Core = function() {
    this.isCoreValid = function(type) {
        var audio = new Audio("");
        if (!audio.canPlayType) {
            return false;
        }
        var flg = ("" != audio.canPlayType(type));
        if (flg) {
            return true;
        } else {
            return false;
        }
    };
};