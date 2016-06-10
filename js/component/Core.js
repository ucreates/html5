//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.Core = function(callback,timeline,name,scene) {
    this.core = null;
    this.startFrame = 0;
    this.isComplete = false;
    this.timeline = timeline;
    this.callback = callback;
    this.degree = 0;
    this.name = name;
    this.alpha = 1;
    this.scene = scene;
    this.position = new Html5.Entity.Position(0,0);
    this.size = new Html5.Entity.Size(0,0);
    this.vector = new Html5.Mathmatics.Vector();
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.stateMachine = new Html5.System.State.FiniteStateMachine();
    this.stateMachineList = new Array();

    this.align = function(anchor) {
        var lx = this.position.x;
        var ly = this.position.y;
        if(false != (anchor & Html5.Entity.Position.Holizontal.Center)) {
            lx -= this.size.halfWidth;
        }

        if(false != (anchor & Html5.Entity.Position.Holizontal.Right)) {
            lx -= this.size.width;
        }

        if(false != (anchor & Html5.Entity.Position.Vertical.Center)) {
            ly -= this.size.halfHeight;
        }

        if(false != (anchor & Html5.Entity.Position.Vertical.Bottom)) {
            ly -= this.size.height;
        }
        this.position.initialize(lx,ly);
    };

    this.currentFrameCenterPositionFromEntity = function(entity) {
        var lx = entity.x;
        var ly = entity.y;
        lx -= this.size.halfWidth;
        ly -= this.size.halfHeight;
        return new Html5.Entity.Position(lx,ly);
    };
 
    this.currentFrameCenterPosition = function() {
        var lx = this.position.x;
        var ly = this.position.y;
        lx += this.size.halfWidth;
        ly += this.size.halfHeight;
        return new Html5.Entity.Position(lx,ly);
    };

    this.currentFrameDefaultCenterPosition = function() {
        var lx = this.position.dx;
        var ly = this.position.dy;
        lx += this.size.halfWidth;
        ly += this.size.halfHeight;
        return new Html5.Entity.Position(lx,ly);
    };
 
    this.createFrameDifferent = function(frame) {
        return this.timeLine.currentFrame-frame;
    };
 
    this.isDrawStart = function(globalframe) {
        if (this.timeline.currentFrame>globalframe) {
            return true;
        } else {
            return false;
        }
    };
 
    this.transform = function(canvas) {
        var radian = Html5.Mathmatics.Radian.createFromDegree(this.degree);
        canvas.setAlpha(this.alpha);
        canvas.context.save();
        canvas.context.translate(this.position.x,this.position.y);
        canvas.context.rotate(radian);
        canvas.context.translate(this.size.halfWidth, this.size.halfHeight);
        canvas.render(this.core.node,-this.size.halfWidth,-this.size.halfHeight,this.size.width,this.size.height);
        canvas.context.restore();
    };

    this.transformWithNode = function(canvas,node,position,size) {
        var radian = Html5.Mathmatics.Radian.createFromDegree(this.degree);
        canvas.setAlpha(this.alpha);
        canvas.context.save();
        canvas.context.translate(position.x,position.y);
        canvas.context.rotate(radian);
        canvas.context.translate(size.halfWidth, size.halfHeight);
        canvas.render(node,-size.halfWidth,-size.halfHeight,size.width,size.height);
        canvas.context.restore();
    };
 
    this.transformWithNodeTrim = function(canvas,node,x,y,tx,ty,tw,th) {
        canvas.setAlpha(this.alpha);
        var radian = Html5.Mathmatics.Radian.createFromDegree(this.degree);
        canvas.context.save();
        canvas.context.translate(x,y);
        canvas.context.rotate(radian);
        canvas.context.translate(this.size.halfWidth, this.size.halfHeight);
        canvas.trimingNormalScale(node,-this.size.halfWidth,-this.size.halfHeight,tx,ty,tw,th);
        canvas.context.restore();
    };

    this.transformWithNodeTrimScale = function(canvas,node,x,y,tx,ty,tw,th,screenw,screenh)
    {
        canvas.setAlpha(this.alpha);
        var radian = Html5.Mathmatics.Radian.createFromDegree(this.degree);
        canvas.context.save();
        canvas.context.translate(x,y);
        canvas.context.rotate(radian);
        canvas.context.translate(this.size.halfWidth, this.size.halfHeight);
        //canvas.triming(node,-this.size.halfWidth,-this.size.halfHeight,tx,ty,tw,th,tw,th);
        canvas.triming(node,tx,ty,tw,th,-this.size.halfWidth,-this.size.halfHeight,screenw,screenh)
        //canvas.triming(node,srcx,srcy,srcw,srch,x,y,srcw,srch);

        canvas.context.restore();
    };
 
    this.restore = function() {
        this.timeLine.gotoStart();
        this.position.restore();
        this.size.restore();
        this.alpha = 1;
        this.degree = 0;
    };

    this.restoreZeroAlphaAndStop = function() {
        this.timeLine.gotoStart();
        this.position.restore();
        this.size.restore();
        this.degree = 0;
        this.alpha = 0;
        this.timeLine.start = false;
    };
 
    this.dump = function() {
        this.timeLine.dump();
    };
};
