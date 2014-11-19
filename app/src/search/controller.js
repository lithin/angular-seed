'use strict';

angular.module('datingApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/search', {
            templateUrl: 'src/search/template.html',
            controller: 'SearchCtrl'
        })
}])

.controller('SearchCtrl', ['$scope', function($scope) {
	$scope.page = "Search for people you might like";
}]);
