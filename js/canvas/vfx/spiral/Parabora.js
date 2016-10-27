//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Spiral.Parabora = function() {};
Html5.VFX.Spiral.Parabora.normal = function(cx, cy, friction, radius, currentFrame) {
    var rate = currentFrame * friction;
    if (rate <= 0) {
        rate = 0;
    }
    var x = cx - (radius * Math.sqrt(rate) * Math.cos(rate));
    var y = cy + (radius * Math.sqrt(rate) * Math.sin(rate));
    return new Html5.Entity.Position(x, y);
};
Html5.VFX.Spiral.Parabora.reverse = function(cx, cy, friction, radius, currentFrame) {
    var rate = currentFrame * friction;
    if (rate <= 0) {
        rate = 0;
    }
    var x = cx + (radius * Math.sqrt(rate) * Math.cos(rate));
    var y = cy + (radius * Math.sqrt(rate) * Math.sin(rate));
    return new Html5.Entity.Position(x, y);
};