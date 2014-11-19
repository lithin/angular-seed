'use strict';

// Declare app level module which depends on views, and components
angular.module('dating', [
  'ngRoute',
  'dating.about',
  'dating.photos'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
      when'/about-you', {
	    templateUrl: 'src/about/template.html',
	    controller: 'AboutCtrl'
	  }).
      when('/photos', {
        templateUrl: 'src/photos/template.html',
        controller: 'PhotosCtrl'
      }).
      otherwise({
        redirectTo: '/about-you'
      });
}]);
