define(['angular', 'lodash'], function (angular, _) {
    'use strict';

    function controller(scope, versionService) {
        var controllerInstance = this;
        controllerInstance.appVersion = versionService.getAppVersion();
        versionService.getApiVersion().then(function (data) {
            controllerInstance.apiVersion = data;
        });
    }
    controller.$inject = ['$scope', 'versionService'];

    angular.module('app.controllers').controller('aboutController', controller);

    return controller;
});
