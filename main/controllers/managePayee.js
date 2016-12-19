clearbank.controller('managePayee', ['$scope', function ($scope) {

   $scope.accName = localStorage.getItem('customerName');
     $scope.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
    $scope.accType=localStorage.getItem('accountType');
    
    var customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
        $scope.favLinks=customerInfo.fav_links;
        $scope.topPayee=customerInfo.top_payee;
    
        $scope.defaultData=true;
      
        var index=localStorage.getItem('currentIndex');
        $scope.transactionInfo=$scope.accountInfo[index];

	}

]);
