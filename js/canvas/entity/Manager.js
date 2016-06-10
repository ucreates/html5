//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Entity.Manager = function()
{
 this.list = new Array();
 this.add = function(key,entity)
 {
  this.list[key] = entity;
 };
 
 this.get = function(key)
 {
  return this.list[key];
 };
 
 this.dump = function()
 {
  for (key in this.list)
  {
    var param = this.list[key];
    param.dump();
  }
 };
};
