//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Frame.Wait = function(destFrame) {
    var _currentFrame = 0;
    var _destFrame = destFrame;
    this.doing = function(frame) {
        _currentFrame += frame;
        if (_currentFrame > _destFrame) {
            return true;
        }
        return false;
    };
};