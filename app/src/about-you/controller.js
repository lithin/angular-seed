'use strict';

angular.module('datingApp.aboutYou', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/about-you', {
            templateUrl: 'src/about-you/template.html',
            controller: 'AboutYouCtrl'
        })
}])

.controller('AboutYouCtrl', ['$scope', function($scope) {
	$scope.page = "A bit about you";
}]);