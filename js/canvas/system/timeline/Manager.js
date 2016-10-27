//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.TimeLine.Manager = function() {
    this.currentFrame = 0;
    this.start = false;
    var _addRate = 1;
    this.rangeValidator = new Html5.System.Validator.Range();
    this.goToNextFrame = function() {
        this.currentFrame += _addRate;
    };
    this.goToPrevFrame = function() {
        this.currentFrame -= _addRate;
    };
    this.goToFrame = function(no) {
        this.currentFrame = no;
    };
    this.setAddRate = function(rate) {
        _addRate = rate;
    };
    this.gotoStart = function() {
        this.goToFrame(0);
    };
    this.isRange = function(max, min) {
        return this.rangeValidator.isValidBetween(max, this.currentFrame, min);
    };
    this.isLess = function(frame) {
        return this.rangeValidator.isValidMax(this.currentFrame, frame);
    };
    this.isOver = function(max) {
        return this.rangeValidator.isValidMin(this.currentFrame, max);
    };
    this.equal = function(frame) {
        return this.currentFrame === frame ? true : false;
    };
    this.reset = function() {
        return this.currentFrame = 0;
    };
    this.dump = function() {};
};