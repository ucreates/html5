//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Vector = function() {};

Html5.VFX.Vector.linerIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.linerIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.linerOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.linerOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.quadraticIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.quadraticIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.quadraticOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.quadraticOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.cubicIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.cubicIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.cubicOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.cubicOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.quarticIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.quarticIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.quarticOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.quarticOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.quinticIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.quinticIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.quinticOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.quinticOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.sinusoidalIn = function (friction,currentFrame,totalFrame,trigonometric) 
{
 return Html5.VFX.Easing.sinusoidalIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.sinusoidalOut = function (friction,currentFrame,totalFrame,trigonometric) 
{
 return Html5.VFX.Easing.sinusoidalOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.exponentialIn = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.exponentialIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.exponentialOut = function(friction,currentFrame,totalFrame,trigonometric)
{
 return Html5.VFX.Easing.exponentialOut(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.circularIn = function (friction,currentFrame,totalFrame,trigonometric) 
{
 return Html5.VFX.Easing.circularIn(friction,currentFrame,totalFrame)*trigonometric;
};

Html5.VFX.Vector.circularOut = function (friction,currentFrame,totalFrame,trigonometric) 
{
 return Html5.VFX.Easing.circularOut(friction,currentFrame,totalFrame)*trigonometric;
};
