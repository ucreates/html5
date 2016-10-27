//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.UI.NameSpace = function(callback, timeline) {
    Direction.Battle.Component.Core.call(this, callback, timeline, 'namespace');
    this.core = null;
    this.create = function(x, y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('/img/battle/boss/waku.png', 'load', this.callback, 0, 0);
    };
    this.render = function(canvas) {
        canvas.setAlpha(1);
        canvas.render(this.core.node, 0, 0);
    };
};