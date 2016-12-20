clearbank.controller('transfersController',['$scope','$cookies', function($scope,$cookies){
  
    
     $scope.accName = sessionStorage.getItem('customerName');
     $scope.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
    $scope.accNumber=sessionStorage.getItem('accountNumber');
    $scope.accBalance=sessionStorage.getItem('accountBalance');
    $scope.accCurrency=sessionStorage.getItem('currency');
    $scope.accType=sessionStorage.getItem('accountType');
    
    var customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
        $scope.favLinks=customerInfo.fav_links;
        $scope.topPayee=customerInfo.top_payee;
    
        $scope.defaultData=true;
      
        var index=sessionStorage.getItem('currentIndex');
        $scope.transactionInfo=$scope.accountInfo[index];
    
	}
]);