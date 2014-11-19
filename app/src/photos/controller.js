'use strict';

angular.module('dating.photos', ['ngRoute'])

.controller('PhotosCtrl', ['$scope', function($scope) {
	$scope.page = "Add or edit your photos";
}]);