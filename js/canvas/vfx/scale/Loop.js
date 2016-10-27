//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Scale.Loop = function() {};
Html5.VFX.Scale.Loop.create = function(friction, currentFrame) {
    var rate = Html5.VFX.Sin.curveZeroToPlus(0.1, currentFrame) * friction;
    //value("loop::"+rate);
    return rate;
};