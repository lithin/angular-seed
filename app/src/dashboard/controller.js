'use strict';

angular.module('datingApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'src/dashboard/template.html',
            controller: 'DashboardCtrl'
        })
}])

.controller('DashboardCtrl', ['$scope', function($scope) {
	$scope.page = "Dashboard";
}]);