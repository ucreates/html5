//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Entity.Redirect = function(pageName)
{
 this.protocol = window.location.protocol+'//';
 this.port = window.location.port;
 this.hostName = window.location.hostname;
 this.pageName = pageName;
 this.pathName = window.location.pathname;

 this.dump = function()
 {
 };
};
