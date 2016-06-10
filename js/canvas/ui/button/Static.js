//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.UI.Button.Static = function(id,callback,observer,timeline,startFrame)
{
 Html5.UI.Button.Core.call(this,id,observer,callback,timeline,startFrame);
 this.sprite = new Html5.Sprite.Dynamic(0);
 this.isDisable = false;
 var _node = null;
 this.create = function(name,x,y,w,h)
 {
     this.sprite.create(name,'load',this.callback);
  this.initialize(x,y,w,h);
  this.addStartEvent();
  this.addEndEvent();
  if (!this.isDisable)
   _node = this.sprite.nodes[0];
  else
   _node = this.sprite.nodes[2];
 };
 
 this.getNode = function()
 {
  if (null === _node)
  {
   _node = this.sprite.nodes[0];
  }
  return _node;
 };
  
 this.move = function(x,y)
 {
     this.position.x += x;
     this.position.y += y;
     this.collider.create(this.position.x, this.position.y, this.sprite.nodes[0].width, this.sprite.nodes[0].height);
 };
 
 this.onClickEnd = function()
 {
  //disable
  if (this.isDisable)
  {
   _node = this.sprite.nodes[2];
  }
  else
  {
   _node = this.sprite.nodes[0];
  }
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
  
  if (1<this.sprite.nodes.length)
  {
   _node = this.sprite.nodes[1];
  }
  
  //disable
  if (this.isDisable)
  {
   _node = this.sprite.nodes[2];
  }
  
  if (null  !==  this.emitter)
  {
   this.emitter();
  }
 };
};
