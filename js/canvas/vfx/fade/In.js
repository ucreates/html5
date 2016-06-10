//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Fade.In = function() {};

Html5.VFX.Fade.In.linerIn = function(currentFrame,totalFrame)
{
  return Html5.VFX.Easing.linerIn(1,currentFrame,totalFrame);
};

Html5.VFX.Fade.In.linerOut = function(currentFrame,totalFrame)
{
  return 1-Html5.VFX.Easing.linerOut(1,currentFrame,totalFrame);
};

Html5.VFX.Fade.In.ExponentialIn = function(currentFrame,totalFrame)
{
    return Html5.VFX.Easing.exponentialIn(1,currentFrame,totalFrame);
};
