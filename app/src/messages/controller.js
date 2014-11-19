'use strict';

datingApp.controller('MessagesCtrl', ['$scope', function($scope) {
	$scope.page = "Your messages";
}]);

datingApp.controller('MessagesDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.page = "Messages with user " + $routeParams.userId;
}]);