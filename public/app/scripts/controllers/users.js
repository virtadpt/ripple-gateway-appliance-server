'use strict';

angular.module('publicApp')
  .controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.users = [];
    $http.get('/api/v1/users').success(function(users){
      $scope.users = users;
    });
  }]);
