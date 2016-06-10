//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Screen.Client = function() {};

Html5.Screen.Client.getTopIndex = function()
{
 var top = document.body.scrollTop;
 if (false != Html5.System.UserAgent.isIOS5())
 {
  top = 0;
 }
 return top+"px";
};

Html5.Screen.Client.getScrollTopIndex = function()
{
 var top = document.body.scrollTop;
 return top+"px";
};
