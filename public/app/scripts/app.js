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
      .when('/admin/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
/*
			.when('/users/:id', {
				templateUrl: 'views/user.html',
				controller: 'UserCtrl'
			})
			.when('/admin/users/:id', {
				templateUrl: 'views/admin/users/index.html',
				controller: 'AdminUserCtrl'
			})
			.when('/admin/users', {
				templateUrl: 'views/admin/users/index.html',
				controller: 'AdminUsersCtrl'
			})
*/
			.when('/admin/users/new', {
				templateUrl: 'views/admin/users/new.html',
				controller: 'AdminNewUserCtrl'
			})
/*
			.when('/register', {
				templateUrl: 'views/registration.html',
				templateUrl: 'RegistrationCtrl'
			})
			.when('/login', {
				templateUrl: 'views/registration.html',
				templateUrl: 'LoginCtrl'
			})
*/
      .otherwise({
        redirectTo: '/'
      });
  });
