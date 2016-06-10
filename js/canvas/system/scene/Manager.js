//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Scene.Manager = function()
{
 var _count = 0;
 this.isComplete = false;
 this.list = new Array();
 this.getNext = function()
 {
  _count++;
  if (this.list.length === _count)
  {
   _count = this.list.length-1;
   this.isComplete = true;
  }
  
  return this.list[_count];
 };
};
