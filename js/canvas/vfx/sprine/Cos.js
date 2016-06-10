//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Cos = function() {};

Html5.VFX.Cos.linerIn = function(friction,currentFrame,totalFrame)
{
 var val = Html5.VFX.Easing.linerIn(friction,currentFrame,totalFrame);
 var radian = Html5.Mathmatics.Radian.createFromDegree(val);
 var ret = friction*Math.cos(radian);
 return ret;
};

Html5.VFX.Cos.linerOut = function(friction,currentFrame,totalFrame)
{
 var val = Html5.VFX.Easing.linerOut(friction,currentFrame,totalFrame);
 var radian = Html5.Mathmatics.Radian.createFromDegree(val);
 var ret = friction*Math.cos(radian);
 return ret;
};

Html5.VFX.Cos.curve = function(friction,currentFrame)
{
 var rate = Math.cos(currentFrame*friction);
 return rate;
};

Html5.VFX.Cos.curveZeroToPlus = function(friction,currentFrame)
{
 var rate = Math.abs(Math.cos(currentFrame*friction));
 return rate;
};

Html5.VFX.Cos.curveZeroToMinus = function(friction,currentFrame)
{
 return -1*Math.abs(Math.cos(currentFrame*friction));
};
