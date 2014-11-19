'use strict';

angular.module('datingApp.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/photos', {
            templateUrl: 'src/photos/template.html',
            controller: 'PhotosCtrl'
        })
}])

.controller('PhotosCtrl', ['$scope', function($scope) {
	$scope.page = "Add or edit your photos";
}]);
