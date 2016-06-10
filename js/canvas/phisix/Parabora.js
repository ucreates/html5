//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Phisix.Parabora = function() {};
Html5.Phisix.Parabora.Gravity = 0.98;

Html5.Phisix.Parabora.create = function(v,m,degree,currentFrame)
{
 var radian = Html5.Mathmatics.Radian.createFromDegree(degree);
 this.Sin = Math.sin(radian);
 this.Cos = Math.cos(radian);
 this.V = v;
 this.M = m;
 var pos = new Html5.Entity.Position();
 var xpos = this.V*this.Cos*currentFrame;
 var ypos = ((this.V*this.Sin*currentFrame)-(Html5.Phisix.Parabora.Gravity*currentFrame*currentFrame/2))*-1;
 pos.x = xpos;
 pos.y = ypos;
 return pos;
};
