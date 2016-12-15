clearbank.controller('transfersController',['$scope','$cookies', function($scope,$cookies){
  
    
     $scope.accName = localStorage.getItem('customerName');
     $scope.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
    $scope.accType=localStorage.getItem('accountType');
    
        $scope.defaultData=true;
      
        var index=localStorage.getItem('currentIndex');
        $scope.transactionInfo=$scope.accountInfo[index];
    
	}
]);