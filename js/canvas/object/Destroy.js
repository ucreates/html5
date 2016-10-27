//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Object.Destroy = function() {};
Html5.Object.Destroy.doing = function(object) {
    if (null != object) {
        delete object;
    }
};