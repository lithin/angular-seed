'use strict';

angular.module('dating.about', ['ngRoute'])

.controller('AboutCtrl', ['$scope', function($scope) {
	$scope.page = "A bit about you";
}]);