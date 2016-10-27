//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Entity.Circle = function() {
    this.vectors = new Array();
    this.points = new Array();
    this.degrees = new Array();
    this.create = function(cx, cy, r, unitDegree) {
        var index = Math.floor(360 / unitDegree);
        for (var i = 0; i < index; i++) {
            var degree = unitDegree * i;
            var radian = Html5.Mathmatics.Radian.createFromDegree(degree);
            var x = cx + r * Math.cos(radian);
            var y = cy - r * Math.sin(radian);
            this.points.push(new Html5.Entity.Position(x, y));
            var vector = new Html5.Mathmatics.Vector(cx, cy, x, y, 1);
            vector.createFromDegree(degree);
            this.vectors.push(vector);
        }
    };
    this.createRandom = function(cx, cy, r, unitDegree) {
        var index = Math.floor(360 / unitDegree);
        for (var i = 0; i < index; i++) {
            var rand = Math.random();
            var degree = unitDegree * i;
            this.degrees.push(degree);
            var radian = Html5.Mathmatics.Radian.createFromDegree(degree);
            var x = cx + rand * r * Math.cos(radian);
            var y = cy - rand * r * Math.sin(radian);
            this.points.push(new Html5.Entity.Position(x, y));
            var vector = new Html5.Mathmatics.Vector(cx, cy, x, y, 1);
            vector.createFromDegree(degree);
            this.vectors.push(vector);
        }
    };
};