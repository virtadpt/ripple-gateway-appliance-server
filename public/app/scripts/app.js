'use strict';

angular.module('publicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
			.when('/users', {
				templateUrl: 'views/users.html',
				controller: 'UsersCtrl'
			})
      .otherwise({
        redirectTo: '/'
      });
  });
