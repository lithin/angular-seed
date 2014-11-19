'use strict';

// Declare app level module which depends on views, and components
var datingApp = angular.module('datingApp', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/about-you', {
            templateUrl: 'src/about-you/template.html',
            controller: 'AboutYouCtrl'
        })
        .when('/photos', {
            templateUrl: 'src/photos/template.html',
            controller: 'PhotosCtrl'
        })
        .when('/looking-for', {
            templateUrl: 'src/looking-for/template.html',
            controller: 'LookingForCtrl'
        })
        .when('/preferences', {
            templateUrl: 'src/preferences/template.html',
            controller: 'PreferencesCtrl'
        })
        .when('/dashboard', {
            templateUrl: 'src/dashboard/template.html',
            controller: 'DashboardCtrl'
        })
        .when('/my-account', {
            templateUrl: 'src/my-account/template.html',
            controller: 'MyAccountCtrl'
        })
        .when('/user-profile', {
            templateUrl: 'src/user-profile/template.html',
            controller: 'UserProfileCtrl'
        })
        .when('/search', {
            templateUrl: 'src/search/template.html',
            controller: 'SearchCtrl'
        })
        .when('/messages', {
            templateUrl: 'src/messages/template-messages.html',
            controller: 'MessagesCtrl'
        })
        .when('/message/:userId', {
            templateUrl: 'src/messages/template-message-detail.html',
            controller: 'MessagesDetailCtrl'
        })
        .otherwise({
            redirectTo: '/about-you'
        });
}]);
