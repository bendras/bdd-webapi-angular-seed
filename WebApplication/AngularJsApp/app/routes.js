define(['angular', 'lodash'], function (angular, _) {
    'use strict';

    angular.module('app')
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/', {
                        templateUrl: 'app/partials/home.html',
                        controller: 'homeController as home'
                    }).
                    when('/about', {
                        templateUrl: 'app/partials/about.html',
                        controller: 'aboutController as about'
                    }).
                    otherwise({
                        redirectTo: '/'
                    });
            }]);
});
