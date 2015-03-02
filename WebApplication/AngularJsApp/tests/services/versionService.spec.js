define(['lodash'], function (_) {
    'use strict';

    describe('Service.Version', function () {

        beforeEach(angular.mock.module('app.services'));


        describe('When getting app version', function () {
            beforeEach(angular.mock.inject(function ($httpBackend) {
                $httpBackend.expectGET('/api/version').respond({ Version: '123.123.0' });
            }));

            it('should return current api version', angular.mock.inject(function (versionService, $httpBackend) {
                var versionValue;
                versionService.getApiVersion().then(function (data) { versionValue = data; });
                expect(versionValue).not.toBeDefined();
                $httpBackend.flush();
                expect(versionValue).toBe('123.123.0');
            }));

            afterEach(angular.mock.inject(function ($httpBackend) {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            }));
        });
    });
});
