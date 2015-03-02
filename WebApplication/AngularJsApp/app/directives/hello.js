define(['angular', 'lodash'], function (angular, _) {
    'use strict';

    function link(scope, element, attrs) {
        scope.$watch('name', function (value) {
            element.removeClass('green orange red');

            if (value && value.length <= 5) {
                element.addClass('green');
            } else if (value && value.length <= 10) {
                element.addClass('orange');
            } else if (value && value.length > 10) {
                element.addClass('red');
            }
        });
    }

    var directive = {
        restrict: 'AE',
        scope: { name: '=appHello' },
        link: link,
        template: 'Hello {{name}}!'
    };

    angular.module('app.directives').directive('appHello', function () { return directive; });

    return directive;
});
