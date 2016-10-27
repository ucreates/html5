//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Web.Control.Form = function(entity) {
    this.parameter = new Html5.Web.Parameter.Post();
    this.entity = entity;
    var _form = document.createElement('form');
    this.create = function(pageName) {
        document.body.appendChild(_form);
        for (var key in this.parameter.value) {
            var input = document.createElement('input');
            var val = this.parameter.value[key];
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', val);
            _form.appendChild(input);
        }
        _form.setAttribute('action', Html5.Web.Url.createFromEntity(this.entity));
        _form.setAttribute('method', 'post');
        //this.dump(pageName);
    };
    this.doing = function() {
        _form.submit();
    };
    this.dump = function(pageName) {
        this.parameter.dump();
    };
};