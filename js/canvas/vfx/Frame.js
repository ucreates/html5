//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.VFX.Frame = function() {};
Html5.VFX.Frame.create = function(currentFrame, totalFrame) {
    if (currentFrame > totalFrame)
        currentFrame = totalFrame;
    return (currentFrame / totalFrame);
};