//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Web.Document.Css = function() {};

Html5.Web.Document.Css.newAppend = function(style)
{
 var css = document.createElement('style');
 css.type = 'text/css';
 css.innerHTML = style;  
 var tag = document.getElementsByTagName("head");
 tag[0].appendChild(css);
};

Html5.Web.Document.Css.remove = function(name)
{
 var tags = document.getElementsByTagName("style");
 for (var tag in tags)
 {
  var obj = tags[tag];
  if (typeof obj   !==   "undefined")
  {
   if (typeof obj.innerHTML   !==   "undefined")
   {
    //window.alert(obj.innerHTML);
    obj.innerHTML = null;
   }
  }
 }
};
