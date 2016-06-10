//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Card.Player  = function(callback,timeline,name)
{
  Direction.Battle.Component.Core.call(this,callback,timeline,name);
 this.core = null;
 this.create = function(x,y)
 {
  this.core = new Html5.Sprite.Static();
  this.core.create('./img/ink01.png',this.callback);
  this.position.initialize(x,y);
  this.size.initialize(162,135);
  this.align(Html5.Entity.Position.centerPosition());
 };
 
 this.update = function()
 {
   //position
   var x = this.position.x+1;
   var y = this.position.y+1;
   this.position.transform(x,y);
   
   //alpha
   //this.alpha -= 0.1;
   
   //size
   //var w = this.size.width+1;
   //var h = this.size.height+1;
   //this.size.transform(w,h);
   
   //rotate
   this.degree += 1;
   this.timeLine.goToNextFrame();
 };
 
 this.render = function(canvas)
 {
   this.update();
   this.transform(canvas);
 };
};
