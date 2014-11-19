'use strict';

angular.module('datingApp.lookingFor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/looking-for', {
            templateUrl: 'src/looking-for/template.html',
            controller: 'LookingForCtrl'
        })
}])

.controller('LookingForCtrl', ['$scope', function($scope) {
	$scope.page = "Who are you looking for?";
}]);