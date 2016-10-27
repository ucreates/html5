//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Scene.Core = function() {
    this.isComplete = false;
    this.callback = null;
    this.canvas = null;
    this.isIgnoreBegin = false;
    //render layer
    this.backGroundLayer = new Html5.System.Layer.Manager();
    this.effectLayer = new Html5.System.Layer.Manager();
    this.cardLayer = new Html5.System.Layer.Manager();
    this.uiLayer = new Html5.System.Layer.Manager();
    this.uiWrapperLayer = new Html5.System.Layer.Manager();
    //timeline
    this.timeline = new Html5.System.TimeLine.Manager();
    //ui observer
    this.uiObserver = new Html5.UI.Button.Observer();
    this.isLoadResource = function() {
        var ret = 0;
        //background
        for (var bi = 0; bi < this.backGroundLayer.list.length; bi++) {
            var bk = this.backGroundLayer.list[bi];
            bk.core.loadImage();
            if (bk.core.isLoad) {
                ret++;
            }
        }
        //UI
        for (var ui = 0; ui < this.uiLayer.list.length; ui++) {
            var uii = this.uiLayer.list[ui];
            uii.core.loadImage();
            if (uii.core.isLoad) {
                ret++;
            }
        }
        //UIW
        for (var uiw = 0; uiw < this.uiWrapperLayer.list.length; uiw++) {
            var uiwi = this.uiWrapperLayer.list[uiw];
            uiwi.core.loadImage();
            if (uiwi.core.isLoad) {
                ret++;
            }
        }
        //symbol
        for (var ci = 0; ci < this.cardLayer.list.length; ci++) {
            var crdi = this.cardLayer.list[ci];
            crdi.core.loadImage();
            if (crdi.core.isLoad) {
                ret++;
            }
        }
        //effect
        for (var ei = 0; ei < this.effectLayer.list.length; ei++) {
            var effi = this.effectLayer.list[ei];
            if (!Html5.System.Utility.Array.isArray(effi.core)) {
                effi.core.loadImage();
                if (effi.core.isLoad) {
                    ret++;
                }
            } else {
                for (var obj in effi.core) {
                    effi.core[obj].loadImage();
                    if (effi.core[obj].isLoad) {
                        ret++;
                    }
                }
            }
        }
        var length = this.backGroundLayer.count() + this.uiLayer.count() + this.uiWrapperLayer.count() + this.cardLayer.count() + this.effectLayer.count();
        //value(length);
        //value(ret);
        if (ret === length) {
            return true;
        }
        return false;
    };
    this.render = function(canvas) {
        if (!this.timeline.start)
            return;
        canvas.begin();
        this._drawComponent(canvas);
        this.timeline.goToNextFrame();
    };
    this.drawTransparent = function(canvas) {
        if (!this.timeline.start)
            return;
        canvas.clear();
        this._drawComponent(canvas);
        this.timeline.goToNextFrame();
    };
    this._drawComponent = function(canvas) {
        //background
        for (var bi = 0; bi < this.backGroundLayer.list.length; bi++) {
            var symbol = this.backGroundLayer.list[bi];
            symbol.render(canvas);
        }
        //UI
        for (var ui = 0; ui < this.uiLayer.list.length; ui++) {
            var symbol = this.uiLayer.list[ui];
            canvas.setAlpha(1);
            canvas.render(symbol.getNode(), symbol.position.x, symbol.position.y);
        }
        //UIW
        for (var uiw = 0; uiw < this.uiWrapperLayer.list.length; uiw++) {
            var symbol = this.uiWrapperLayer.list[uiw];
            symbol.render(canvas);
        }
        //symbol
        var pcount = 0;
        for (var ci = 0; ci < this.cardLayer.list.length; ci++) {
            var symbol = this.cardLayer.list[ci];
            symbol.render(canvas);
        }
        //effect
        for (var ei = 0; ei < this.effectLayer.list.length; ei++) {
            var symbol = this.effectLayer.list[ei];
            symbol.render(canvas);
        }
    };
};