require(['angular', 'jquery', 'angularRoute', 'angularResource', 'angularMocks'], function (angular) {
    'use strict';

    // define angular modules
    angular.module('app.directives', []);
    angular.module('app.services', ['ngResource', 'ngMock']);
    angular.module('app.controllers', ['ngRoute', 'app.services', 'ngMock']);

    // load files for each module
    require([
        'app/routes',
        'app/services/main',
        'app/controllers/main',
        'app/directives/main',
        'tests/services/versionService.spec',
        'tests/controllers/aboutController.spec',
        'tests/directives/hellow.spec'
    ], function () {
        // execute jasmine tests.
        // removed line from boot.js and added it here.
        window.jasmine.getEnv().execute();
    });
});