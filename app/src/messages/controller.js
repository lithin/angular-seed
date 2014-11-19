'use strict';

angular.module('datingApp.messages', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/messages', {
            templateUrl: 'src/messages/template-messages.html',
            controller: 'MessagesCtrl'
        })
        .when('/message/:userId', {
            templateUrl: 'src/messages/template-message-detail.html',
            controller: 'MessagesDetailCtrl'
        })
}])

.controller('MessagesCtrl', ['$scope', function($scope) {
    $scope.page = "Your messages";
}])

.controller('MessagesDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.page = "Messages with user " + $routeParams.userId;
}]);
