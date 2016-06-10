//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Mathmatics.Vector = function()
{
 this.magnitude = 0;
 this.magnitudeHolizon = 0;
 this.productWithOriginal = 0;
 this.cos = 0;
 this.sin = 0;
 this.degree = 0;
 var _sx = 0;
 var _sy = 0;
 var _ex = 0;
 var _ey = 0;

 this.createFromPoint = function(sx,sy,ex,ey)
 {
  _sx = sx;
  _sy = sy;
  _ex = ex;
  _ey = ey;
  this.magnitude = this._createMagnituide(_sx,_sy,_ex,_ey);
  this.magnitudeHolizon = this._createMagnituide(_sx,0,_ex,0);
  var ox = this._adjustOriginalPoint(_sx,_ex);
  var oy = this._adjustOriginalPoint(_sy,_ey);
  this.productWithOriginal = this.createProdctFromPoint(ox,oy,ox,0); 
  this.createSinCosFromMagnitude(this.magnitude,this.magnitudeHolizon,this.productWithOriginal);
 };
 
 this.createFromDegree = function(degree)
 {
  this.createSinCosFromDegree(degree);
 };
 
 this._adjustOriginalPoint = function(sp,ep)
 {
  return ep-sp;
 };
 
 this._createMagnituide = function(sx,sy,ex,ey)
 {
  var mx = ex-sx; 
  var my = ey-sy; 
  var mg = (mx*mx)+(my*my);
  return Math.sqrt(mg);
 };
 
 this.createProdctFromPoint = function(x1,y1,x2,y2)
 {
 return (x1*x2)+(y1*y2);
 };

 this.createProdctFromMagnitude = function(magnitude1,magnitude2,cos)
 {
 return magnitude1*magnitude2*cos;
 };

 this.createSinCosFromDegree = function(degree)
 {
  var radian = Html5.Mathmatics.Radian.createFromDegree(degree);
  this.cos = Math.cos(radian);
  this.sin = -Math.sin(radian);
 };
 
 this.createSinCosFromMagnitude = function(magnitude1,magnitude2,product)
 {
  this.cos = product/(magnitude1*magnitude2);
  if (isNaN(this.cos) || !isFinite(this.cos))
  {
   this.cos = 0;
  }
  if (1<this.cos)
  {
   this.cos = 1;
  }
  if (-1>this.cos)
  {
   this.cos = -1;
  }
  
  var mx = _ex-_sx; 
  if (mx<0)
  {
   this.cos *= -1;
  }
  
  this.sin = 1-Math.abs(this.cos);
  if (-1>this.sin)
  {
   this.sin = -1;
  }

  if (1<this.sin)
  {
   this.sin = 1;
  }
  
  var my = _ey-_sy; 
  if (my<0)
  {
   this.sin *= -1;
  }
  if (my === 0)
  {
   this.sin = 0;
  }
  this.degree = Html5.Mathmatics.Degree.createFromRadian(this.sin);
 };
  
 this._dump = function()
 {
 };
};
