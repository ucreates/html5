//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Scale.Bouncy = function() {};

Html5.VFX.Scale.Bouncy.In = function(friction,currentFrame,totalFrame,time)
{
 currentFrame = Html5.VFX.Scale.Bouncy.createRate(currentFrame,totalFrame,time,1-(time*0.1),0.1);
 var val = Html5.VFX.Easing.linerIn(friction,currentFrame,totalFrame);
 return val;
};

Html5.VFX.Scale.Bouncy.Out = function(friction,currentFrame,totalFrame,time)
{
 currentFrame = Html5.VFX.Scale.Bouncy.createRate(currentFrame,totalFrame,time,time*0.1,0.1);
 var val = Html5.VFX.Easing.linerOut(friction,currentFrame,totalFrame);
 return val;
};

Html5.VFX.Scale.Bouncy.createRate = function(currentFrame,totalFrame,time,rate,addTimeRate)
{
 if (time  <=  0)
 {
  return currentFrame;
 }
 if (currentFrame>totalFrame)
 {
  currentFrame *= rate;
  return Html5.VFX.Scale.createBoucyRate(currentFrame,totalFrame,time-1,rate+addTimeRate,addTimeRate);
 }
 return currentFrame;
};

