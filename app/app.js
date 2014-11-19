'use strict';

// Declare app level module which depends on views, and components
var datingApp = angular.module('datingApp', [
    'ngRoute',
    'datingApp.aboutYou',
    'datingApp.dashboard',
    'datingApp.lookingFor',
    'datingApp.messages',
    'datingApp.myAccount',
    'datingApp.photos',
    'datingApp.preferences',
    'datingApp.search',
    'datingApp.userProfile'
])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/about-you'
        });
}]);
