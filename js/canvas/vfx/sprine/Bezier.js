//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Sprine.Bezier = function() {};
Html5.VFX.Sprine.Bezier.create = function(points, currentFrame, totalFrame) {
    var imtx = Html5.VFX.Sprine.Bezier.createIMatrix(currentFrame, totalFrame);
    var pmtx = Html5.VFX.Sprine.Bezier.createPMatrix(points[0], points[3], points[1], points[2]);
    var val = Html5.Mathmatics.Matrix.multiplication(imtx, pmtx);
    //Html5.Mathmatics.Matrix.dump(val);
    return new Html5.Entity.Position(val[0][0], val[0][1]);
};
Html5.VFX.Sprine.Bezier.createIMatrix = function(currentFrame, totalFrame) {
    var t = Html5.VFX.Frame.create(currentFrame, totalFrame);
    var row1 = new Array(Math.pow((1 - t), 3), 3 * Math.pow((1 - t), 2) * t, 3 * (1 - t) * Math.pow(t, 2), Math.pow(t, 3));
    var imtx = new Array(row1);
    return imtx;
};
Html5.VFX.Sprine.Bezier.createPMatrix = function(sp, ep, dp1, dp2) {
    var row1 = new Array(sp.x, sp.y);
    var row2 = new Array(dp1.x, dp1.y);
    var row3 = new Array(dp2.x, dp2.y);
    var row4 = new Array(ep.x, ep.y);
    var pmtx = new Array(row1, row2, row3, row4);
    return pmtx;
};