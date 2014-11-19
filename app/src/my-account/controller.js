'use strict';

angular.module('datingApp.myAccount', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/my-account', {
            templateUrl: 'src/my-account/template.html',
            controller: 'MyAccountCtrl'
        })
}])

.controller('MyAccountCtrl', ['$scope', function($scope) {
	$scope.page = "My account";
}]);
