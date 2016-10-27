//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Trace.Log = function() {};
Html5.System.Trace.Log.enter = function(name, alert) {
    var val = "enter::" + name;
    Html5.System.Trace.Log.write(val, alert);
};
Html5.System.Trace.Log.leave = function(name, alert) {
    var val = "leave::" + name;
    Html5.System.Trace.Log.write(val, alert);
};
Html5.System.Trace.Log.value = function(value, alert) {
    var val = "value::" + value;
    Html5.System.Trace.Log.write(val, alert);
};
Html5.System.Trace.Log.argument = function(value, alert) {
    var val = "argument::" + value;
    Html5.System.Trace.Log.write(val, alert);
};
Html5.System.Trace.Log.returnvalue = function(value, alert) {
    var val = "return::" + value;
    Html5.System.Trace.Log.write(val, alert);
};
Html5.System.Trace.Log.object = function(object, alert) {
    var val = "";
    for (var i in object) {
        val = val + "\n" + i + "\t" + object[i];
    }
    Html5.System.Trace.Log.write(val, alert);
};
Html5.System.Trace.Log.write = function(value, alert) {
    if (!alert)
        console.log(value);
    else
        window.alert(value);
};
//global
function enter(name) {
    Html5.System.Trace.Log.enter(name, false);
}
function leave(name) {
    Html5.System.Trace.Log.leave(name, false);
}
function value(value) {
    Html5.System.Trace.Log.value(value, false);
}