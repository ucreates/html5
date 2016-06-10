//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Scale.Decline = function() {};

Html5.VFX.Scale.Decline.linerIn = function(friction,currentFrame,totalFrame)
{
 var rate = friction-Html5.VFX.Easing.linerIn(friction,currentFrame,totalFrame);
 return rate;
};

Html5.VFX.Scale.Decline.linerOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Easing.linerOut(friction,currentFrame,totalFrame);
 return rate;
};

Html5.VFX.Scale.Decline.ExponentialIn = function(friction,currentFrame,totalFrame,lastSizeRate)
{
 var rate = friction-Html5.VFX.Easing.exponentialIn(friction,currentFrame,totalFrame);
 return rate+lastSizeRate;
};
