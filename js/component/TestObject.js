//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.TestObject = function(callback, timeline, name, scene) {
    Direction.Battle.Component.Core.call(this, callback, timeline, name, scene);
    this.core = null;
    this.position = new Html5.Entity.Position(160, 210);
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.vector = new Html5.Mathmatics.Vector();
    this.rate = 0;
    this.rateRate = 0.1;
    this.alpha = 1;
    this.x = 100;
    this.y = 100;
    this.points;
    this.create = function(x, y) {
        this.core = new Html5.Sprite.Static();
        this.core.create('./img/ink01.png', this.callback);
        //this.points = new Array(new Html5.Entity.Position(-100*10,0),new Html5.Entity.Position(100,70),new Html5.Entity.Position(-100*2,140),new Html5.Entity.Position(100,270));
        this.position.initialize(0, 100);
        this.size.initialize(162, 135);
        this.points = new Array(new Html5.Entity.Position(-100, 200), new Html5.Entity.Position(0, 100), new Html5.Entity.Position(0, 0));
        this.scene.effectLayer.list.push(this);
    };
    this.render = function(canvas) {
        //position
        var entity = Html5.Phisix.Parabora.create(5.5, 0, 80, this.timeLine.currentFrame);
        var x = entity.x;
        var y = entity.y;
        this.position.transformAdd(x, y);
        //scale
        var rate = Html5.VFX.Scale.Loop.create(1, this.timeLine.currentFrame);
        this.size.transformMultiple(rate, rate);
        this.timeLine.goToNextFrame();
        this.transform(canvas);
    };
    this.drawBQuadratic = function(canvas) {
        var entity = Html5.VFX.Sprine.Basis.quadratic(this.points, this.timeLine.currentFrame * 0.1, 10);
        this.x = entity.x;
        this.y = entity.y;
        canvas.drawWithSize(this.core.node, this.x, this.y, this.size.width, this.size.height);
        this.timeLine.goToNextFrame();
    };
    this.drawBSprine = function(canvas) {
        var entity = Html5.VFX.Sprine.Basis.cubic(this.points, this.timeLine.currentFrame, 10);
        this.x = entity.x;
        this.y = entity.y;
        canvas.drawWithSize(this.core.node, this.x, this.y, this.size.width, this.size.height);
        this.timeLine.goToNextFrame();
    };
    this.drawHermiteSprine = function(canvas) {
        var entity = Html5.VFX.Sprine.Ferguson.create(new Html5.Entity.Position(0, 0), new Html5.Entity.Position(200, 150), new Html5.Entity.Position(150, -300), new Html5.Entity.Position(450, -150), this.timeLine.currentFrame, 10);
        this.x = entity.x;
        this.y = entity.y;
        canvas.drawWithSize(this.core.node, this.x, this.y, this.size.width, this.size.height);
        this.timeLine.goToNextFrame();
    };
    this.drawCircleMOveAndRotateSelf = function(canvas) {
        var scale = Html5.VFX.Scale.Decline.ExponentialIn(0.5, this.timeLine.currentFrame, 12, 0);
        //var scale  = 1;
        var radisus = Html5.VFX.Easing.linerOut(200, this.timeLine.currentFrame, 12);
        var rotate = Html5.VFX.Easing.linerOut(270, this.timeLine.currentFrame, 12);
        var entity = Html5.VFX.Circle.normal(canvas.size.halfWidth, canvas.size.halfHeight, radisus, this.rate);
        this.rate -= Html5.VFX.Easing.linerOut(1, this.timeLine.currentFrame, 12);
        this.x = entity.x;
        this.y = entity.y;
        this.rotate(this.core, this.x, this.y, this.size.width * scale, this.size.height * scale, rotate, canvas);
        this.timeLine.goToNextFrame();
    };
    this.drawRotateMySelf = function(canvas) {
        this.rotate(this.core, this.position.x, this.position.y, this.size.width, this.size.height, -1 * this.timeLine.currentFrame, canvas);
        this.timeLine.goToNextFrame();
    };
    this.drawOnHelix = function(canvas) {
        this.rate += Html5.VFX.Easing.linerOut(1, this.timeLine.currentFrame, 100);
        var radisus = Html5.VFX.Easing.linerOut(200, this.timeLine.currentFrame, 50);
        var entity = Html5.VFX.Circle.normal(canvas.size.halfWidth, canvas.size.halfHeight, radisus, this.rate);
        this.x = entity.x;
        this.y = entity.y;
        canvas.setAlpha(1);
        canvas.drawWithSize(this.core.node, this.x - this.size.halfWidth, this.y - this.size.halfHeight, this.size.width, this.size.height);
        this.timeLine.goToNextFrame();
    };
    //点滅アクション
    this.drawFlashAlpha = function(canvas) {
        this.alpha = Html5.VFX.Sin.curveZeroToPlus(0.25, this.timeLine.currentFrame);
        canvas.setAlpha(this.alpha);
        canvas.drawWithSize(this.core.node, this.x, this.y, this.size.width, this.size.height);
        this.timeLine.goToNextFrame();
    };
    //縮小　拡大　泊まる　拡大
    this.drawEasingInOutScale = function(canvas) {
        if (this.timeLine.currentFrame < 7) {
            this.rate += Html5.VFX.Scale.Increase.ExponentialIn(0.5, this.timeLine.currentFrame, 6, 0);
            this.x = Html5.VFX.Scale.Core.padding(this.rate, this.size.width, this.position.x);
            this.y = Html5.VFX.Scale.Core.padding(this.rate, this.size.height, this.position.y);
        }
        if (7 <= this.timeLine.currentFrame && this.timeLine.currentFrame < 30) {
            this.rate += 0.01;
            this.x = Html5.VFX.Scale.Core.padding(this.rate, this.size.width, this.position.x);
            this.y = Html5.VFX.Scale.Core.padding(this.rate, this.size.height, this.position.y);
        }
        if (30 <= this.timeLine.currentFrame) {
            this.alpha = Html5.VFX.Fade.Out.ExponentialIn(this.timeLine.currentFrame - 30, 7);
            this.rate += Html5.VFX.Scale.Increase.linerIn(1, this.timeLine.currentFrame - 30, 30, 0.2);
            this.x -= Html5.VFX.Easing.linerOut(80, this.timeLine.currentFrame - 30, 100);
            this.y = Html5.VFX.Scale.Core.padding(this.rate, this.size.height, this.position.y);
        }
        canvas.setAlpha(this.alpha);
        canvas.drawWithSize(this.core.node, this.x, this.y, this.size.width * this.rate, this.size.height * this.rate);
        this.timeLine.goToNextFrame();
    };
    //速く動く　泊まる　はやくうごく
    this.drawIasingInOut = function(canvas) {
        if (this.timeLine.currentFrame < 4) {
            this.alpha = Html5.VFX.Fade.In.ExponentialIn(this.timeLine.currentFrame, 3);
            this.rate = Html5.VFX.Easing.linerOut(100, this.timeLine.currentFrame, 6);
        }
        if (4 <= this.timeLine.currentFrame && this.timeLine.currentFrame < 30) {
            this.rate = 1;
        }
        if (this.timeLine.currentFrame > 22) {
            this.alpha = Html5.VFX.Fade.Out.ExponentialIn(this.timeLine.currentFrame - 22, 10);
        }
        if (30 <= this.timeLine.currentFrame) {
            this.rate = Html5.VFX.Easing.linerOut(100, this.timeLine.currentFrame - 30, 10);
        }
        this.position.x += this.rate;
        canvas.setAlpha(this.alpha);
        canvas.drawWithSize(this.core.node, this.position.x, this.position.y, this.size.width, this.size.height);
        this.timeLine.goToNextFrame();
    };
    //EasingTest
    this.drawEasing = function(canvas) {
        //var rate = Html5.VFX.Easing.exponentialOut(1,this.timeLine.currentFrame,30);
        //var alpha = Html5.VFX.Easing.exponentialIn(1,this.timeLine.currentFrame,5);
        var rate = 1;
        //  //easing out
        //  this.x = Html5.VFX.Easing.quadraticOut(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.cubicOut(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.quarticOut(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.quinticOut(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.sinusoidalOut(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.exponentialOut(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.circularOut(300,this.timeLine.currentFrame,20);
        //
        //  //easing in
        //  this.x = Html5.VFX.Easing.quadraticIn(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.cubicIn(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.quarticIn(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.quinticIn(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.sinusoidalIn(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.exponentialIn(300,this.timeLine.currentFrame,20);
        //  this.x = Html5.VFX.Easing.circularIn(300,this.timeLine.currentFrame,20);
        //
        //  this.y = Html5.VFX.Easing.circularIn(300,this.timeLine.currentFrame,20);
        //bouncy
        this.vector.createFromDegree(60);
        this.position.x += Html5.VFX.Bouncy.linerOut(120, this.timeLine.currentFrame, 7, this.vector.cos);
        this.position.y += Html5.VFX.Bouncy.linerOut(120, this.timeLine.currentFrame, 7, this.vector.sin);
        canvas.setAlpha(1);
        canvas.drawWithSize(this.core.node, this.position.x, this.position.y, this.size.width * rate, this.size.height * rate);
        this.timeLine.goToNextFrame();
    };
};