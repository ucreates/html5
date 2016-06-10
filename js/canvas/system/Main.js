//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Main = function(tasklist)
{
 this.tasklist  = tasklist;
 this.canvas = new Html5.Screen.Canvas('canvas');
 this.scene = null;
 this.sceneManager = new Html5.System.Scene.Manager();
 this.isCreate = false;
 this.isComplete = false;
 
 this.destroy = function()
 {
  this.sceneManager.isComplete = true;
 };
 
 this.run = function()
 {
  this.canvas.create();
  
  var me = this;
  var draw = function()
  {
   //finish.
   if (me.sceneManager.isComplete)
   {
     me.canvas.clear();
     return;
   }
   
   if (!me.isCreate)
   {
    me.isCreate = true;
    me.scene = me.sceneManager.list[0];
    me.scene.create();
   }
   
   //taskdraw
   if (!me.scene.isComplete)
   {
    me.scene.doing(me.canvas);
   }
   else
   {
    me.canvas.setAlpha(0);
    me.canvas.reset();
    me.scene = me.sceneManager.getNext();
    me.scene.create();
   }
  };
  
  for (var i = 0;i<this.tasklist.length;i++)
  {
   var task = this.tasklist[i];
   task.callback = draw;
   task.canvas = this.canvas;
   this.sceneManager.list.push(task);
  }
  setInterval(draw,100);
 }; 
};
