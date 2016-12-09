clearbank.controller('managePayee', ['$scope', function ($scope) {


    $scope.accName = localStorage.getItem('customerName');
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
     

	}

]);
