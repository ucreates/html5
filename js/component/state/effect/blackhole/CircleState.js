//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Component.State.Effect.BlackHole.CircleState = function(owner) {
    Html5.System.State.FiniteState.call();
    this.owner = owner;
    this.timeLine = new Html5.System.TimeLine.Manager();
    this.isComplete = false;
    this.diffFrames = new Array();
    var frameRate = 1.2;
    var diffRate = 10;
    this.create = function(paramter) {
        this.isComplete = false;
        this.timeLine.reset();
        this.timeLine.setAddRate(1);
        for (var i = 0; i < this.owner.elementCount; i++) {
            this.diffFrames[i] = i;
        }
        return;
    };
    this.execute = function() {
        //動作する数のオブジェクトのみ移動する。数は可変である
        for (var i = 0; i < this.owner.currentElementCount; i++) {
            //半径を動かす:オブジェクトの個数だけフレーム差分が生まれる。
            var cf = this.timeLine.currentFrame - 10 - this.diffFrames[i] * diffRate;
            //var cf = this.timeLine.currentFrame * diffRate;
            var radius = Html5.VFX.Easing.linerOut(150, cf, 20);
            //サイズ
            var width = Html5.VFX.Scale.Decline.linerOut(2, cf, 20);
            var height = Html5.VFX.Scale.Decline.linerOut(2, cf, 20);
            this.owner.sizes[i].transformMultiple(width, height);
            //ばらついた状態で並べるためにこうしている
            var px = this.owner.sizes[i].paddingx;
            var py = this.owner.sizes[i].paddingy;
            cf = Html5.VFX.Easing.linerIn(10, cf, 40);
            var entity = Html5.VFX.Circle.normal(this.owner.positions[i].dx, this.owner.positions[i].dy, radius, cf);
            this.owner.positions[i].transform(entity.x + px, entity.y + py);
        }
        if (this.owner.currentElementCount < this.owner.positions.length) {
            //5フレーム経過したら移動するオブジェクトを増やす：カウンタインクリメント
            var cf = this.timeLine.currentFrame % this.owner.nextElementAppearFrame;
            if (0 == cf) {
                this.owner.nextElementAppearFrame = Html5.Mathmatics.Random.range(2, 5);
                this.owner.currentElementCount++;
            }
        }
        this.timeLine.goToNextFrame();
        return;
    };
};