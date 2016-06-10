//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.UI.Button.Observer = function()
{
 this.list = new Array();
 this.isTouch = function()
 {
  var ret = true;
  for (var i = 0;i<this.list.length;i++)
  {
   var button = this.list[i];
   if (!button.isTouch)
   {
    ret = false;
    break;
   }
  }
  return ret;
 };
 
 this.enable = function()
 {
  for (var i = 0;i<this.list.length;i++)
  {
   var button = this.list[i];
   button.isTouch = true;
  }
 };
 
 this.disable = function()
 {
  for (var i = 0;i<this.list.length;i++)
  {
   var button = this.list[i];
   button.isTouch = false;
  }
 };
 
};
