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
			.when('/api/docs', {
				templateUrl: 'views/api.html',
				controller: 'ApiDocsCtrl'
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
			.when('/admin/deposits/new', {
				templateUrl: 'views/deposits/new.html',
				controller: 'AdminDepositsCtrl'
			})
			.when('/admin/users/new', {
				templateUrl: 'views/admin/users/new.html',
				controller: 'AdminNewUserCtrl'
			})
			.when('/login', {
				templateUrl: 'views/main.html',
				controller: 'LoginCtrl'
			})
      .otherwise({
        redirectTo: '/'
      });
  });
