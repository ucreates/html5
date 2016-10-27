//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Shake.Increase = function() {};
Html5.VFX.Shake.Increase.ExponentialOut = function(friction, currentFrame, totalFrame) {
    var shake = Html5.VFX.Easing.linerIn(friction, currentFrame, totalFrame);
    if (0 == currentFrame % 2) {
        shake *= -1;
    }
    return shake;
};
Html5.VFX.Shake.Increase.Loop = function(friction, currentFrame) {
    var shake = Html5.VFX.Sin.curveZeroToPlus(0.1, currentFrame) * friction;
    return 0 === currentFrame % 2 ? shake : shake *= -1;
};