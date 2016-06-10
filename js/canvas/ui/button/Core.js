//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.UI.Button.Core = function(id,observer,callback,timeline,startFrame)
{
 this.position = null;
 this.emitter = null;
 this.callback = callback;
 this.isTouch = true;
 this.id = id;
 this.collider = new Html5.Phisix.Collider();
 this.observer = observer;
 this.startFrame = startFrame;
 this.timeline = timeline;
 this.initialize = function(x,y,w,h)
 {
  var ypad = Html5.Screen.Canvas.getTopIndex("canvas")-Html5.Screen.Canvas.getBottomIndex("canvas");
  var xpad = Html5.Screen.Canvas.getLeftIndex("canvas")-Html5.Screen.Canvas.getRightIndex("canvas");
  this.collider.create(x+xpad, y+ypad, w,h);
  this.position = new Html5.Entity.Position(x,y);
 };
  
 this.move = function(x,y)
 {
  this.position.x += x;
  this.position.y += y;
  this.collider.create(this.position.x, this.position.y, this.sprite.getNode().width, this.sprite.getNode().height);
 };
 
 this.addStartEvent = function()
 {
  var self = this;
  if (navigator.userAgent.indexOf("Macintosh"))
  {
   var clickStart = function(e) 
   {
    if (self.startFrame>self.timeline.currentFrame)
     return;
    
    var x = 0;
    var y = 0;
    x = e.x;
    y = e.y;
    if (self.collider.observe(x,y)) 
    {
     self.onClickStart();
    }
   };
   window.document.addEventListener('mousedown',clickStart,false);
  }
  
  if (navigator.userAgent.indexOf("iPhone"))
  {
   var self = this;
   var tatchStart = function(e) 
   {
    if (self.startFrame>self.timeline.currentFrame)
     return;
    var t = e.touches[0];
    var x = t.pageX;
    var y = t.pageY;
    if (self.collider.observe(x,y)) 
    {
     self.onClickStart();
    }
   };
   window.document.addEventListener('touchstart',tatchStart,false);
  }
 };
 
 this.addEndEvent = function()
 {
  var self = this;
  var end  = function(e) 
  {
   self.onClickEnd();
  };
  
  if (navigator.userAgent.indexOf("Macintosh"))
  {
   window.document.addEventListener('mouseup',end,false);
  }
  if (navigator.userAgent.indexOf("iPhone"))
  {
   window.document.addEventListener('touchend',end,false);
  }
 };
 
 this.isTouchFromObserver = function()
 {
  if (null === this.observer)
   return true;

  if (0 === this.observer.length)
   return true;
  
  var ret = true;
  for (var i = 0;i<this.observer.length;i++)
  {
   var button = this.observer[i];
   if (this.id  !==  button.id)
   {
    if (!button.isTouch)
    {
     ret = false;
     break;
    }
   }
  }
  return ret;
 };
};
