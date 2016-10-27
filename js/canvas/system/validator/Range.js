//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Validator.Range = function() {
    this.isValidMax = function(value, max) {
        if (value < max) {
            return true;
        }
        return false;
    };
    this.isValidMin = function(value, min) {
        if (value > min) {
            return true;
        }
        return false;
    };
    this.isValidBetween = function(min, value, max) {
        if (min <= value && value < max) {
            return true;
        }
        return false;
    };
};