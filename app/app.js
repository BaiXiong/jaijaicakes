'use strict';

// Declare app level module which depends on views, and components
angular.module('jaijaicakes', [
  'ngRoute',
  'jaijaicakes.login',
  'jaijaicakes.register'
]).
config(['$routeProvider', function($routeProvider) {
  // Set defualt view of our app to login

      $routeProvider.otherwise({
          redirectTo: '/login'
      });
}]);
