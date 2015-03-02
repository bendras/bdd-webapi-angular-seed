define(['angular', 'lodash'], function (angular, _) {
    'use strict';

    function service($resource, $q) {
        var versionApiResource = $resource('/api/version');

        this.getApiVersion = function () {
            return $q(function (resolve, reject) {
                versionApiResource.get({}, function (data) {
                    resolve(data.Version);
                });
            });
        };

        this.getAppVersion = function () { return '1.0.1'; };
    }
    service.$inject = ['$resource', '$q'];

    angular.module('app.services').service('versionService', service);

    return service;
});
