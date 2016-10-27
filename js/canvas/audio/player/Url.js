//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Audio.Player.Url = function(id) {
    this.id = id;
    var _isPlay = false;
    this.play = function() {
        location.href = 'sound://?se = ' + this.id.toString();
    };
    this.playOnce = function() {
        if (!_isPlay) {
            location.href = 'sound://?se = ' + this.id.toString();
            _isPlay = true;
        }
    };
};