'use strict';

angular.module('publicApp')
  .controller('UsersCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.users = [];
    $http.get('/api/users').success(function(data){
			for (var i=0;i<data.length;i++) {
				$scope.users.push(data[i].name);
			}
    });
  }]);
