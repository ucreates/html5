//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Sprite.Static = function() {
    this.position = null;
    this.node = new Image();
    this.isLoad = false;
    this.create = function(name, callback) {
        this.node.addEventListener('load', callback(this.node));
        this.node.src = name;
    };
    this.destroy = function() {
        delete this.node;
    };
    this.loadImage = function() {
        var self = this;
        this.node.onload = function() {
            self.isLoad = true;
        };
    };
};