//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Easing = function() {};

Html5.VFX.Easing.linerIn = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return friction* rate;
};

Html5.VFX.Easing.linerOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return friction*(1-rate);
};

Html5.VFX.Easing.quadraticIn = function(friction,currentFrame,totalFrame)
{
 return Html5.VFX.Easing.power(friction,currentFrame,totalFrame,2); 
};

Html5.VFX.Easing.quadraticOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return -1*friction*rate*(rate-2); 
};

Html5.VFX.Easing.cubicIn = function(friction,currentFrame,totalFrame)
{
 return Html5.VFX.Easing.power(friction,currentFrame,totalFrame,3); 
};

Html5.VFX.Easing.cubicOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 rate--;
 return friction*(Math.pow(rate,3)+ 1); 
};

Html5.VFX.Easing.quarticIn = function(friction,currentFrame,totalFrame)
{
 return Html5.VFX.Easing.power(friction,currentFrame,totalFrame,4); 
};

Html5.VFX.Easing.quarticOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 rate--;
 return -1*friction*(Math.pow(rate,4)-1); 
};

Html5.VFX.Easing.quinticIn = function(friction,currentFrame,totalFrame)
{
 return Html5.VFX.Easing.power(friction,currentFrame,totalFrame,5); 
};

Html5.VFX.Easing.quinticOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 rate--;
 return friction*(Math.pow(rate,5)+1); 
};

Html5.VFX.Easing.sinusoidalIn = function (friction,currentFrame,totalFrame) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return -1*friction * Math.cos(rate * (Math.PI/2)) + friction;
};

Html5.VFX.Easing.sinusoidalOut = function (friction,currentFrame,totalFrame) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return friction * Math.sin(rate * (Math.PI/2));
};

Html5.VFX.Easing.exponentialIn = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return friction * Math.pow(2,10*(rate-1));
};

Html5.VFX.Easing.exponentialOut = function(friction,currentFrame,totalFrame)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return friction * ( -Math.pow(2,-10*rate)+1 );
};

Html5.VFX.Easing.circularIn = function (friction,currentFrame,totalFrame) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return -1*friction * (Math.sqrt(1 - Math.pow(rate,2))-1);
};

Html5.VFX.Easing.circularOut = function (friction,currentFrame,totalFrame) 
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 rate--;
 return friction * (Math.sqrt(1 - Math.pow(rate,2)));
};

Html5.VFX.Easing.power = function(friction,currentFrame,totalFrame,power)
{
 var rate = Html5.VFX.Frame.create(currentFrame,totalFrame); 
 return friction*Math.pow(rate,power); 
};
