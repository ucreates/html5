//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Sprite.Dynamic = function(rate)
{
 this.nodes = new Array();
 this._frame = 0;
 if (null  !==  rate)
 {
  this._updateRate = rate;
 }
 else
 {
  this._updateRate = 1;
 }
 var _timeline = new Html5.System.TimeLine.Manager();
 
 this.destroy = function()
 {
  for (var i = 0;i<this.nodes.length;i++)
  {
   Html5.Object.Destroy.doing(this.nodes[i]);
  }
 };
 
 this.create = function(nameList,method,callback)
 {
  for (element in nameList)
  {
   var name = nameList[element];
   var image = new Image();
   image.addEventListener(method, callback);
   image.src = name;
   this.nodes.push(image);
  }
 };
 
 this.getNode = function()
 {
  if (0  !==  this._updateRate)
  {
   if (_timeline.currentFrame  !==  this._updateRate)
   {
    _timeline.goToNextFrame();
    return this.nodes[this._frame];
   }
   else
   {
    _timeline.gotoStart();
   }
  }
  
  if (++this._frame == this.nodes.length)
  {
   this._frame = 0;
  }
  return this.nodes[this._frame];
 };
};
