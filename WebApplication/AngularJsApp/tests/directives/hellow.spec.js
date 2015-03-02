define(['lodash'], function (_) {
    'use strict';

    describe('Directives.Hellow', function () {

        beforeEach(angular.mock.module('app.directives'));

        describe('When rendering', function () {
            var html, scope;

            beforeEach(angular.mock.inject(function ($rootScope, $compile) {
                scope = $rootScope.$new();

                html = angular.element('<div app-hello="variableName"></div>');
                $compile(html)(scope);
            }));

            it('should greet name', function () {
                scope.variableName = 'Andrew';
                scope.$digest();

                expect(html.text()).toBe('Hello Andrew!');
            });

            it('should have class green for short names', function () {
                scope.variableName = '5aaaa';
                scope.$digest();

                expect(html.hasClass('green')).toBe(true);
                expect(html.hasClass('orange')).toBe(false);
                expect(html.hasClass('red')).toBe(false);
            });

            it('should have class orange for regular names', function () {
                scope.variableName = '6aaaaa';
                scope.$digest();

                expect(html.hasClass('green')).toBe(false);
                expect(html.hasClass('orange')).toBe(true);
                expect(html.hasClass('red')).toBe(false);
            });

            it('should have class red for long names', function () {
                scope.variableName = '11aaaaaaaaa';
                scope.$digest();

                expect(html.hasClass('green')).toBe(false);
                expect(html.hasClass('orange')).toBe(false);
                expect(html.hasClass('red')).toBe(true);
            });
        });
    });
});
