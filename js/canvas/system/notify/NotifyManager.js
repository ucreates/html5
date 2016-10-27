//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Notify.NotifyManager = function() {
    this.previousMessage = null;
    this.currentMessage = null;
    this.notifierList = new Array();
    this.owner = null;
    this.notify = function(message, parameter) {
        for (key in this.notifierList) {
            this.notifierList[key].onNotify(message, parameter);
        }
        this.previousMessage = this.currentMessage;
        this.currentMessage = message;
        return;
    };
};
Html5.System.Notify.NotifyManager.getInstance = function() {
    if (null === Html5.System.Notify.NotifyManager.instance) {
        Html5.System.Notify.NotifyManager.instance = new Html5.System.Notify.NotifyManager();
    }
    return Html5.System.Notify.NotifyManager.instance;
};
Html5.System.Notify.NotifyManager.instance = null;