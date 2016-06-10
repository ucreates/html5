//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.UI.BackGround = function(callback,timeline,name) {
    Direction.Battle.Component.Core.call(this,callback,timeline,name);
    this.core = null;
    this.create = function(x,y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/magic_space.png',this.callback);
        this.position.initialize(x,y);
        this.size.initialize(320,430);
        this.align(Html5.Entity.Position.centerPosition());
    };

    this.render = function(canvas) {
        this.transform(canvas);
    };
};
