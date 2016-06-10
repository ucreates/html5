//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Bouncy = function() {};

Html5.VFX.Bouncy.linerIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.linerIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.linerOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.linerOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.quadraticIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.quadraticIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.quadraticOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.quadraticOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.cubicIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.cubicIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.cubicOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.cubicOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.quarticIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.quarticIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.quarticOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.quarticOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.quinticIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.quinticIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.quinticOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.quinticOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.sinusoidalIn = function (friction,currentFrame,totalFrame,trigonometric) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.sinusoidalIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.sinusoidalOut = function (friction,currentFrame,totalFrame,trigonometric) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.sinusoidalOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.exponentialIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.exponentialIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.exponentialOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.exponentialOut(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.circularIn = function (friction,currentFrame,totalFrame,trigonometric) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.circularIn(friction,currentFrame,totalFrame,ltrigonometric);
};

Html5.VFX.Bouncy.circularOut = function (friction,currentFrame,totalFrame,trigonometric) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 var ltrigonometric = rate >= 0.4 ? -trigonometric : trigonometric;
 return Html5.VFX.Vector.circularOut(friction,currentFrame,totalFrame,ltrigonometric);
};
