//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Sprine.Ferguson = function() {};
Html5.VFX.Sprine.Ferguson.create = function(sp, ep, sv, ev, currentFrame, totalFrame) {
    var tmtx = Html5.VFX.Sprine.Ferguson.createTMatrix(currentFrame, totalFrame);
    var hmtx = Html5.VFX.Sprine.Ferguson.createHMatrix();
    var gmtx = Html5.VFX.Sprine.Ferguson.createGMatrix(sp, ep, sv, ev);
    var thmtx = Html5.Mathmatics.Matrix.multiplication(tmtx, hmtx);
    var val = Html5.Mathmatics.Matrix.multiplication(thmtx, gmtx);
    return new Html5.Entity.Position(val[0][0], val[0][1]);
};
Html5.VFX.Sprine.Ferguson.createTMatrix = function(currentFrame, totalFrame) {
    var t = currentFrame / totalFrame;
    if (t > 1) {
        t = 1;
    }
    var row1 = new Array(Math.pow(t, 3), Math.pow(t, 2), t, 1);
    var tmtx = new Array(row1);
    return tmtx;
};
Html5.VFX.Sprine.Ferguson.createHMatrix = function() {
    var row1 = new Array(2, -2, 1, 1);
    var row2 = new Array(-3, 3, -2, -1);
    var row3 = new Array(0, 0, 1, 0);
    var row4 = new Array(1, 0, 0, 0);
    var hmtx = new Array(row1, row2, row3, row4);
    //Html5.Mathmatics.Matrix.dump(hmtx);
    return hmtx;
};
Html5.VFX.Sprine.Ferguson.createGMatrix = function(sp, ep, sv, ev) {
    var row1 = new Array(sp.x, sp.y);
    var row2 = new Array(ep.x, ep.y);
    var row3 = new Array(sv.x, sv.y);
    var row4 = new Array(ev.x, ev.y);
    var gmtx = new Array(row1, row2, row3, row4);
    //Html5.Mathmatics.Matrix.dump(gmtx);
    return gmtx;
};