require(['angular', 'jquery', 'angularRoute', 'angularResource'], function (angular, jquery) {
    'use strict';

    // define angular modules
    angular.module('app.directives', []);
    angular.module('app.services', ['ngResource']);
    angular.module('app.controllers', ['ngRoute', 'app.services']);
    angular.module('app', ['app.controllers', 'app.directives', 'app.services']);

    // load files for each module
    require([
        'app/routes',
        'app/services/main',
        'app/controllers/main',
        'app/directives/main'
    ], function () {
        angular.element().ready(function () {
            // bootstrap the app manually
            angular.bootstrap(document, ['app']);
        });
    });


});