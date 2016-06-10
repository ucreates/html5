//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Load = function(filename)
{
 var script = document.createElement('script');
 script.src = '/js/canvas/'+filename;
 script.type = 'text/javascript';
 script.defer = true;
 document.getElementsByTagName('head').item(0).appendChild(script);
};
