//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Entity.Size = function(width,height)
{
 //original
 this.dwidth = width;
 this.dheight = height;
 
 //current
 this.width = width;
 this.height = height;
 
 //half
 this.halfWidth = width/2;
 this.halfHeight = height/2;

 this.paddingx = 0;
 this.paddingy = 0;
 
 //ratio
 this.currentRatio = 0;
 this.initialize = function(width,height)
 {
   this.dwidth = width;
   this.dheight = height;
   this.width = width;
   this.height = height;
   this.halfWidth = width/2;
   this.halfHeight = height/2;

   this.paddingx = 0;
   this.paddingy = 0;
   if (this.width < this.height) {
       this.currentRatio = this.height / this.width;
   } else {
       this.currentRatio = this.width / this.height;
   }
 };
 
 this.transform = function(width,height)
 {
   this.width = width;
   this.height = height;
   this.halfWidth = width/2;
   this.halfHeight = height/2;
   this.paddingx = this.createPadding(this.width,this.dwidth);
   this.paddingy = this.createPadding(this.height,this.dheight);
 };
 
 this.transformAdd = function(width,height)
 {
   this.width += width;
   this.height += height;
   this.halfWidth = this.width/2;
   this.halfHeight = this.height/2;
   this.paddingx = this.createPadding(this.width,this.dwidth);
   this.paddingy = this.createPadding(this.height,this.dheight);
 };

 this.transformMultiple = function(xrate,yrate)
 {
   this.width = this.dwidth*xrate;
   this.height = this.dheight*yrate;
   this.halfWidth = this.width/2;
   this.halfHeight = this.height/2;
   this.paddingx = this.createPadding(this.width,this.dwidth);
   this.paddingy = this.createPadding(this.height,this.dheight);
 };
 
 this.transformDefault = function(width,height)
 {
   this.width = this.dwidth+width;
   this.height = this.dheight+height;
   this.halfWidth = width/2;
   this.halfHeight = height/2;
   this.paddingx = this.createPadding(this.width,this.dwidth);
   this.paddingy = this.createPadding(this.height,this.dheight);
 };
 
 this.restore  = function()
 {
   this.width = this.dwidth;
   this.height = this.dheight;
   this.halfWidth = this.width/2;
   this.halfHeight = this.height/2;
 };
 
 this.createPadding = function(cs,ds)
 {
   var pad = -1*(cs-ds)/2;
   return pad;   
 }
};
