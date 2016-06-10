//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Phisix.Collider = function()
{
 var _sx = 0;
 var _sy = 0;
 var _ex = 0;
 var _ey = 0;
 this.create = function(sx,sy,width,height)
 {
  _sx = sx;
  _sy = sy;
  _ex = sx+width;
  _ey = sy+height;
 };
 
 this.observe = function(tx,ty)
 {
     return (_sx<tx && tx < _ex && _sy < ty && ty < _ey);
 };
 
 this._dump = function()
 {
 };
};
