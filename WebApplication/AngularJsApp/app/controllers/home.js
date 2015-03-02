define(['angular', 'lodash'], function (angular, _) {
    'use strict';

    function controller(scope, window) {
        var controllerInstance = this;
        controllerInstance.browserName = window.navigator.appName;
    }
    controller.$inject = ['$scope', '$window'];

    angular.module('app.controllers').controller('homeController', controller);

    return controller;
});
