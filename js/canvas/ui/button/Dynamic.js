//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.UI.Button.Dynamic = function(id,callback,observer,timeline,startFrame,updateRate)
{
 Html5.UI.Button.Core.call(this,id,observer,callback,timeline,startFrame) 
 this.sprite = new Html5.Sprite.Dynamic(updateRate);
 this.create = function(name,x,y,w,h)
 {
     this.sprite.create(name,'load',this.callback);
     this.initialize(x,y,w,h);
     this.addStartEvent();
  this.addEndEvent();
 };
 
 this.getNode = function()
 {
  return this.sprite.getNode();
 };
 
 this.onClickEnd = function()
 {
  _node = this.sprite.nodes[0];
 };
 
 this.onClickStart = function()
 {
  if (!this.isTouch)
  {
   return;
  }

  if (!this.isTouchFromObserver())
  {
   return;
  }
  this.observer.disable();
  if (null  !==  this.emitter)
  {
   this.emitter();
  }
  else
  {
  }
 };
};
