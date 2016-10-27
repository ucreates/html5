//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Circle = function() {};
Html5.VFX.Circle.normal = function(cx, cy, radius, currentFrame) {
    var x = cx + Html5.VFX.Cos.curve(1, currentFrame) * radius;
    var y = cy + Html5.VFX.Sin.curve(1, currentFrame) * radius;
    return new Html5.Entity.Position(x, y);
};
Html5.VFX.Circle.reverse = function(cx, cy, radius, currentFrame) {
    var x = cx - Html5.VFX.Cos.curve(1, currentFrame) * radius;
    var y = cy - Html5.VFX.Sin.curve(1, currentFrame) * radius;
    return new Html5.Entity.Position(x, y);
};
Html5.VFX.Circle.normalIn = function(cx, cy, radius, friction, currentFrame, switchFrame) {
    if (currentFrame > switchFrame) {
        var n = 1;
        for (;;) {
            var ret = switchFrame / n;
            if (ret <= switchFrame) {
                break;
            }
            n++;
        }
        return Html5.VFX.Circle.normalIn(cx, cy, radius, friction - 0.1, currentFrame, switchFrame * (n + 1));
    }
    var x = cx + Html5.VFX.Cos.curve(friction, currentFrame) * radius;
    var y = cy + Html5.VFX.Sin.curve(friction, currentFrame) * radius;
    return new Html5.Entity.Position(x, y);
};
Html5.VFX.Circle.normalOut = function(friction, currentFrame, totalFrame, trigonometric) {};