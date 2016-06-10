//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.UserAgent = function() {};

Html5.System.UserAgent.getName = function()
{
 var ua = navigator.userAgent;
 ua.match(/iPhone OS (\w+) {1,3}/g);
 var osVar = (RegExp.$1.replace(/_/g, '')).slice(0,1);
 //window.alert(osVar);
 return osVar;
};

Html5.System.UserAgent.isIOS5 = function()
{
 var ua = navigator.userAgent;
 if (ua.indexOf('iPhone') != -1)
 {
  var name = Html5.System.UserAgent.getName();
  if (name === '5')
  {
   return true;
  }
  return false;
 }
 else
 {
  //window.alert("not::isIOS5");
  return false;
 }
};
