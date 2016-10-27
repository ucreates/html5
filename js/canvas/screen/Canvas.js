//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Screen.Canvas = function(id) {
    this.canvas = null;
    this.context = null;
    this.id = id;
    this.size = null;
    this.isFadeOut = false;
    this.isFadeIn = false;
    this.fadeOut = null;
    this.fadeIn = null;
    this.allScreen = null;
    this.leftHalf = null;
    this.rightHalf = null;
    this.topHalf = null;
    this.bottomHalf = null;
    this.isShake = false;
    this.shakeRate = 2;
    this.create = function() {
        this.canvas = window.document.getElementById(this.id);
        this.context = this.canvas.getContext("2d");
        this.size = new Html5.Entity.Size(this.canvas.width, this.canvas.height);
    };
    this.destroy = function() {
        delete this.canvas;
        delete this.context;
    };
    this.clear = function() {
        if (null == this.canvas)
            return;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "rgba(255,0,0,0)";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    this.begin = function() {
        if (null == this.canvas)
            return;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };
    this.render = function(node, x, y, width, height) {
        if (null == this.canvas)
            return;
        if (null != node) {
            this.context.drawImage(node, x, y, width, height);
        }
    };
    this.trimingNormalScale = function(node, x, y, srcx, srcy, srcw, srch) {
        this.triming(node, srcx, srcy, srcw, srch, x, y, srcw, srch);
    };
    this.triming = function(node, x, y, srcx, srcy, srcw, srch, screenw, screenh) {
        if (null == this.canvas)
            return;
        if (null != node) {
            this.context.drawImage(node, x, y, srcx, srcy, srcw, srch, screenw, screenh);
        }
    };
    this.startShake = function(friction) {
        this.isShake = true;
        this.shakeRate = friction;
    };
    this.stopShake = function() {
        this.isShake = false;
    };
    this.shake = function(frame) {
        if (false === this.isShake) {
            return 0;
        }
        return Html5.VFX.Shake.Increase.Loop(this.shakeRate, frame);
    };
    this.drawReverse = function(node, x, y) {
        if (null == this.canvas)
            return;
        if (null != node)
            this.context.drawImage(node, x, y);
        this.rotate(180);
    };
    this.rotate = function(rot) {
        var rad = Html5.Mathmatics.Radian.createFromDegree(rot);
        this.context.rotate(rad);
    };
    this.drawText = function(string, x, y, align) {
        if (null == this.context)
            return;
        var startx = this.getTextHolizontalAlign(string, x, align);
        this._drawText(string, startx, y, "#ffffff", 10);
        //this.context.fillStyle = "#ffffff";
        //this.context.fillText(string,startx,y);
    };
    this.createCapture = function() {
        this.allScreen = this.context.getImageData(0, 0, this.size.width, this.size.height);
        this.leftHalf = this.context.getImageData(0, 0, this.size.halfWidth, this.size.height);
        this.rightHalf = this.context.getImageData(this.size.halfWidth, 0, this.size.halfWidth, this.size.height);
        this.topHalf = this.context.getImageData(0, 0, this.size.width, this.size.halfHeight);
        this.bottomHalf = this.context.getImageData(0, this.size.halfHeight, this.size.width, this.size.halfHeight);
    };
    this.drawCapture = function(id, x, y) {
        if (id == "all") {
            this.context.putImageData(this.allScreen, x, y);
        } else if (id == "left") {
            this.context.putImageData(this.leftHalf, x, y);
        } else if (id == "right") {
            this.context.putImageData(this.rightHalf, x, y);
        } else if (id == "top") {
            this.context.putImageData(this.topHalf, x, y);
        } else if (id == "bottom") {
            this.context.putImageData(this.bottomHalf, x, y);
        }
    };
    this.getTextHolizontalAlign = function(string, x, align) {
        if (null == this.context) {
            return;
        }
        var met = this.context.measureText(string);
        var startx = x;
        if ('center' === align || null === align) {
            startx = x - met.width / 2;
        } else if ('left' === align) {
            startx = x;
        } else if ('right' === align) {
            startx = x + met;
        }
        return startx;
    };
    this.drawTextWithProperty = function(string, x, y, align, color, size) {
        var startx = this.getTextHolizontalAlign(string, x, align);
        this._drawText(string, startx, y, color, size);
    };
    this._drawText = function(string, x, y, color, size) {
        if (null == this.context) {
            return;
        }
        this.context.font = size + "px";
        this.context.fillStyle = color;
        this.context.fillText(string, x, y);
    };
    this.reset = function() {
        this.isFadeOut = false;
        this.isFadeIn = false;
    };
    this.setAlpha = function(val) {
        if (null == this.context)
            return;
        if (!this.isFadeOut && !this.isFadeIn) {
            this.context.globalAlpha = val;
        } else {
            var fade = 0;
            if (this.isFadeOut) {
                //fade = this.fadeOut.doing();
            }
            if (this.isFadeIn) {
                //fade = this.fadeIn.doing();
            }
            this.context.globalAlpha = fade;
        }
    };
};