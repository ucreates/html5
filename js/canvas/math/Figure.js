//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Mathmatics.Figure = function() {};
Html5.Mathmatics.Figure.figureNumber = function(number, count) {
    if ("undefined" !== typeof count)
        lcount = count;
    else
        lcount = 1;
    ret = number / 10;
    ret = Math.floor(ret);
    if (ret <= 0) {
        return lcount;
    } else {
        return Html5.Mathmatics.Figure.figureNumber(ret, ++lcount);
    }
};
Html5.Mathmatics.Figure.getNFigureValue = function(number, figure) {
    var ret = number / Math.pow(10, figure - 1);
    ret = Math.floor(ret);
    ret = ret % 10;
    //value("figure::"+ret);
    return ret;
};