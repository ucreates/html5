//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Mathmatics.Radian = function() {};
Html5.Mathmatics.Radian.createFromDegree = function(degree) {
    var ret = degree / 180 * Math.PI;
    return ret;
};