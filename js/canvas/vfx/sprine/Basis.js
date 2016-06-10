//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Sprine.Basis = function() {};

Html5.VFX.Sprine.Basis.quadratic = function(point,currentFrame,totalFrame)
{
    var next = new Html5.Entity.Position(0,0);
    var t = Html5.VFX.Frame.create(currentFrame,totalFrame);
    for ( var i = 0; i < point.length; i++) {
        var cn = 0;
        if (i == 0) {
            cn = Math.pow((1-t),2);
        } else if (i == 1) {
            cn = 2*t*(1-t);
        } else if (i == 2) {
            cn = Math.pow(t,2);
        }
            
        var entity = point[i];
        next.x += entity.x*cn;
        next.y += entity.y*cn;
    }
    return next;
};

Html5.VFX.Sprine.Basis.cubic = function(point,currentFrame,totalFrame)
{
 var next = new Html5.Entity.Position(0,0);
 var t = Html5.VFX.Frame.create(currentFrame,totalFrame);
 for (var i = 0;i<point.length;i++)
 {
  var cn = 0;
  if (i == 0)
   cn = (-1*Math.pow(t,3)+3*Math.pow(t,2)-3*t+1)/6;
  else if (i == 1)
   cn = (3*Math.pow(t,3)-6*Math.pow(t,2)+4)/6;
  else if (i == 2)
   cn = (-3*Math.pow(t,3)+3*Math.pow(t,2)+3*t+1)/6;
  else if (i == 3)
   cn = Math.pow(t,3)/6;
  
  var entity = point[i];
  next.x += entity.x*cn;
  next.y += entity.y*cn;
 }
 return next;
};
