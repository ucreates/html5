//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Web.Url = function()
{
 this.paramter = new Web.Parameter.Get();
 this.hostName = 'http://www.google.co.jp/';
 
 this.create = function(pageName) 
 {
  var param = this.get.create();
  this.dump(pageName);
  return this.hostName+pageName+param;
 };
 
 this.dump = function(pageName)
 {
  this.get.dump();
 };
};

Html5.Web.Url.createFromEntity = function(entity)
{
 var url = entity.protocol+entity.hostName+entity.pageName;
 return url;
};
