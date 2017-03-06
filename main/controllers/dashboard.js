'use strict';
clearbank.controller('dashboardController', ['$scope', function ($scope) {

		$scope.accName = sessionStorage.getItem('customerName');

		$scope.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));

		let customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		$scope.favLinks = customerInfo.fav_links;
		$scope.topPayee = customerInfo.top_payee;
		$scope.accNumber = sessionStorage.getItem('accountNumber');
		$scope.accBalance = sessionStorage.getItem('accountBalance');
		$scope.accCurrency = sessionStorage.getItem('currency');
		$scope.accType = sessionStorage.getItem('accountType');
		$scope.defaultData = true;
		$scope.getIndex = function (index) {
			sessionStorage.setItem('currentIndex', index);
			$scope.defaultData = false;
		}
		let index = sessionStorage.getItem('currentIndex');
		$scope.transactionInfo = $scope.accountInfo[index];

	}

]);
