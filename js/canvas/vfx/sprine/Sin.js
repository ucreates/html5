//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Sin = function() {};
Html5.VFX.Sin.linerIn = function(friction, currentFrame, totalFrame) {
    var val = Html5.VFX.Easing.linerIn(friction, currentFrame, totalFrame);
    var radian = Html5.Mathmatics.Radian.createFromDegree(val);
    var ret = friction * Math.sin(radian);
    return ret;
};
Html5.VFX.Sin.linerOut = function(friction, currentFrame, totalFrame) {
    var val = Html5.VFX.Easing.linerOut(friction, currentFrame, totalFrame);
    var radian = Html5.Mathmatics.Radian.createFromDegree(val);
    var ret = friction * Math.sin(radian);
    return ret;
};
Html5.VFX.Sin.curve = function(friction, currentFrame) {
    var rate = Math.sin(currentFrame * friction);
    return rate.toFixed(2);
};
Html5.VFX.Sin.curveZeroToPlus = function(friction, currentFrame) {
    return Math.abs(Math.sin(currentFrame * friction));
};
Html5.VFX.Sin.curveZeroToMinus = function(friction, currentFrame) {
    return -1 * Math.abs(Math.sin(currentFrame * friction));
};