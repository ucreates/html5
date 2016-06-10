//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Sprine.Eight = function() {};

Html5.VFX.Sprine.Eight.create = function(cx,cy,radius,rate,currentFrame)
{
  if (rate>1)
    rate = 1;
  var x = cx+Html5.VFX.Cos.curve(rate/2,currentFrame)*radius;
  var y = cy+Html5.VFX.Sin.curve(rate,currentFrame)*radius;
  return new Html5.Entity.Position(x,y);
};
