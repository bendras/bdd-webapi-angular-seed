define(['lodash'], function (_) {
    'use strict';

    describe('Controller.About', function () {

        beforeEach(angular.mock.module('app.controllers'));

        describe('When Initialising', function () {
            var scope, versionService;

            beforeEach(angular.mock.inject(function ($q) {
                versionService = {
                    getAppVersion: function () {return '111'; },
                    getApiVersion: function () {return $q(function (resolve, reject) { resolve('123'); }); }
                };
            }));

            beforeEach(angular.mock.inject(function ($controller, $rootScope) {
                scope = $rootScope.$new();
                $controller('aboutController as about', { $scope: scope, versionService: versionService });
            }));

            it('should set current app version', angular.mock.inject(function () {
                expect(scope.about.appVersion).toBe('111');
                expect(scope.about.apiVersion).not.toBeDefined();
            }));

            it('should set current api version from api response', angular.mock.inject(function ($rootScope) {
                $rootScope.$digest();
                expect(scope.about.apiVersion).toBe('123');
            }));
        });
    });
});
