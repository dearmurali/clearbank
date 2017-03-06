
clearbank.controller('managePayee', ['$scope', function ($scope) {

		$scope.accName = sessionStorage.getItem('customerName');
		$scope.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
		$scope.accNumber = sessionStorage.getItem('accountNumber');
		$scope.accBalance = sessionStorage.getItem('accountBalance');
		$scope.accCurrency = sessionStorage.getItem('currency');
		$scope.accType = sessionStorage.getItem('accountType');

		let customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		$scope.favLinks = customerInfo.fav_links;
		$scope.topPayee = customerInfo.top_payee;

		$scope.defaultData = true;

		let index = sessionStorage.getItem('currentIndex');
		$scope.transactionInfo = $scope.accountInfo[index];

	}

]);
