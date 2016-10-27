//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Phisix.Bound.Scale = function() {
    var _e = 1;
    var _speed = 0;
    var _original = 0;
    var _rate = 0;
    var _gravity = 0.098;
    var _recreateRate = 1;
    var _m = 0;
    this.scaleRate = 0;
    this.positionAdjustRate = 0;
    this.create = function(speed, rate, m) {
        _speed = speed;
        _original = speed;
        _rate = rate;
        if (null == m) {
            _m = 0;
        } else {
            _m = m;
        }
    };
    this.doing = function() {
        if (0 > _recreateRate) {
            this.createPositionRate(1);
            return 1;
        }
        _speed -= _gravity + _m;
        if (1 > _speed) {
            _recreateRate = (_original - _rate) / _original;
            _rate += _rate;
            _speed = _e * _recreateRate * _original;
            if (1 > _speed)
                _speed = 1;
        }
        this.createPositionRate(_speed);
        return _speed;
    };
    this.createPositionRate = function(rate) {
        this.positionAdjustRate = rate / 2;
    };
};