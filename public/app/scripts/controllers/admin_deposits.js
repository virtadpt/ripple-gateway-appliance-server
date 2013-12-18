'use strict';

angular.module('publicApp')
  .controller('AdminDepositsCtrl', ['$scope', '$http', function ($scope, $http) {

		console.log('in the admin dposits controller');
    $scope.createDeposit = function () {

			$http.post('/api/deposits', {})	
			.success(function(){
				console.log('success');
			})
			.error(function(err){
				console.log({error: err});
			});
		}
  }]);
