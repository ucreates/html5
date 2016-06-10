//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.UI.Event = function() {};

Html5.UI.Event.prevent = function()
{
 event.preventDefault();
};

Html5.UI.Event.unlock = function()
{
 document.removeEventListener("touchmove", Html5.UI.Event.prevent, false);
};

Html5.UI.Event.lock = function()
{
 document.addEventListener("touchmove",Html5.UI.Event.prevent, false);    
};
