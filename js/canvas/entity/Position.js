//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Entity.Position = function(x,y)
{
 this.dx = x;
 this.dy = y;
 this.x = x;
 this.y = y;
  
 this.initialize = function(x,y)
 {
   this.dx = x;
   this.dy = y;
   this.x = x;
   this.y = y;
 };
 
 this.transform = function(x,y)
 {
   this.x = x;
   this.y = y;
 };
 
 this.transformAdd = function(x,y)
 {
   this.x += x;
   this.y += y;
 };

 this.transformDefault = function(x,y)
 {
   this.x = this.dx+x;
   this.y = this.dy+y;
 };
 
 this.restore  = function()
 {
   this.x = this.dx;
   this.y = this.dy;
 };
 
 this.dump  = function()
 {
 };

};

Html5.Entity.Position.centerPosition = function()
{
    return Html5.Entity.Position.Holizontal.Center | Html5.Entity.Position.Vertical.Center;
};

Html5.Entity.Position.Holizontal = {};
Html5.Entity.Position.Holizontal.Left = 0x01;
Html5.Entity.Position.Holizontal.Center = 0x02;
Html5.Entity.Position.Holizontal.Right = 0x04;

Html5.Entity.Position.Vertical = {};
Html5.Entity.Position.Vertical.Top = 0x08;
Html5.Entity.Position.Vertical.Center = 0x10;
Html5.Entity.Position.Vertical.Bottom = 0x20;
