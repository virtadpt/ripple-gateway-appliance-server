'use strict';

angular.module('publicApp')
  .controller('AdminWithdrawalsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.withdrawals = [];
		$scope.getWithdrawals = function () {
			$http.get('/api/withdrawals')
			.success(function(withdrawals){
				$scope.withdrawals = withdrawals;
			});
			.error(function(err){
				console.log({ error: err });
			});
		}

    $scope.createWithdrawal = function () {
			$http.post('/api/withdrawals', {})	
			.success(function(){
				console.log('success');
			})
			.error(function(err){
				console.log({error: err});
			});
		}
  }]);
