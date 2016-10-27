//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Fade.OutIn = function() {};
Html5.VFX.Fade.OutIn.create = function(friction, currentFrame) {
    return Html5.VFX.Sin.curveZeroToPlus(friction, currentFrame);
};