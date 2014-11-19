'use strict';

angular.module('datingApp.preferences', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/preferences', {
            templateUrl: 'src/preferences/template.html',
            controller: 'PreferencesCtrl'
        })
}])

.controller('PreferencesCtrl', ['$scope', function($scope) {
    $scope.page = "Choose which restaurants, clubs, etc you like";
}]);
