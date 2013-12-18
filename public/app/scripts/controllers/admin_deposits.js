'use strict';

angular.module('publicApp')
  .controller('AdminDepositsCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.deposits = [];

		function getDeposits() {
			$http.get('/api/deposits')
			.success(function(deposits) {
				$scope.deposits = deposits;
			})
			.error(function(err) {
				console.log({ error: err });
			});
		}

    $scope.createDeposit = function () {
			console.log('create Deposit');
			var userId = $scope.deposit.userId;
			var currency = $scope.deposit.currency;
			var cashAmount = $scope.deposit.cashAmount;
			$http.post('/api/deposits', { currency: currency, cashAmount: cashAmount })	
			.success(function(){
				getDeposits();
			})
			.error(function(err){
				console.log({ error: err });
			});
		}

		getDeposits();
  }]);
