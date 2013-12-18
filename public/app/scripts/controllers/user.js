'use strict';

angular.module('publicApp')
  .controller('UserCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.user = null;
    $http.get('/api/users/:id').success(function(users){
      $scope.user = user;
    });
  }]);
