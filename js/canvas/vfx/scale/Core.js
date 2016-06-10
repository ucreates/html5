//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Scale.Core = function() {};
Html5.VFX.Scale.Core.padding = function(rate,size,position)
{
    return position-((size*rate-size)/2);
};
