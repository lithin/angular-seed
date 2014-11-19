'use strict';

angular.module('datingApp.userProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/user-profile', {
            templateUrl: 'src/user-profile/template.html',
            controller: 'UserProfileCtrl'
        })
}])

.controller('UserProfileCtrl', ['$scope', function($scope) {
	$scope.page = "User profile";
}]);
