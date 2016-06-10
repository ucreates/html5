//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Direction.Battle.Service.ServiceGateway = function() {
    this.serviceList = new Array();

    this.registService = function () {
        this.serviceList["boss"] = new Direction.Battle.Service.BossService ();
    }

    this.findServiceByName = function (serviceName) {
        if (null !== this.serviceList[serviceName]) {
            return this.serviceList[serviceName];
        }
        return null;
    };

    this.findServiceByDomainSchema = function (domainSchema) {
        var schemaInfo = domainSchema.split("/");
        var serviceName = schemaInfo[0];
        var strategyName = schemaInfo[1];
        if (null !== this.serviceList[serviceName]) {
            var service = this.serviceList[serviceName];
            return service.createStrategy(strategyName);
        }
        return null;
    };

    this.clear = function() {
        delete this.serviceList;
        this.serviceList = new Array();
    };

};

Direction.Battle.Service.ServiceGateway.instance = null;

Direction.Battle.Service.ServiceGateway.getInstance = function() {
    if (null === Direction.Battle.Service.ServiceGateway.instance) {
        Direction.Battle.Service.ServiceGateway.instance = new Direction.Battle.Service.ServiceGateway();
        Direction.Battle.Service.ServiceGateway.instance.registService();
    }
    return Direction.Battle.Service.ServiceGateway.instance;
};

