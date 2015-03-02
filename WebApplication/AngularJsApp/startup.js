require.config({
    baseUrl: '/',
    "paths": {
        "app": "/app",
        "tests": "/tests",
        "lodash": "/scripts/lodash",
        "angular": "/scripts/angular",
        "angularRoute": "/scripts/angular-route",
        "angularResource": "/scripts/angular-resource",
        "angularMocks": "/scripts/angular-mocks",
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    },
    shim: {
        'angular': { deps: ['jquery'], 'exports': 'angular' },
        'angularRoute': ['angular'],
        'angularResource': ['angular'],
        'angularMocks': { deps: ['angular'], 'exports': 'angular.mock' }
    },
    priority: ["jquery", "angular"]
});

    // Load the main app module to start the app
if (window.testsRunner === true) {
    require(["tests/bootstrapTests"]);
} else {
    require(["app/angularBootstrap"]);
}


// very helpful example https://github.com/tnajdek/angular-requirejs-seed/blob/master/app/require-config.js
