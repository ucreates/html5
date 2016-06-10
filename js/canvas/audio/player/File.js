//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Audio.Player.File = function(fileName)
{
 var _audio = new Audio(fileName);
 _audio.autoplay = false;
 _audio.load();
 this.play = function()
 {
  _audio.play();
 };
 
 this.pause = function()
 {
  _audio.pause();
 };
 
};

