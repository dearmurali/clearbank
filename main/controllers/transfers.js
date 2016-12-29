clearbank.controller('transfersController',['$scope','$cookies', function($scope,$cookies){
  
    
     $scope.accName = sessionStorage.getItem('customerName');
     $scope.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
    $scope.accNumber=sessionStorage.getItem('accountNumber');
    $scope.accBalance=sessionStorage.getItem('accountBalance');
    $scope.accCurrency=sessionStorage.getItem('currency');
    $scope.accType=sessionStorage.getItem('accountType');
    $scope.transferHeading="Any Other Bank Account through";
   
$scope.bankName="clearBank";
    $scope.ifscCode="CCBI0017226";
     $scope.transferChoice=$scope.selected2;
    console.log($scope.selected2);
    
    var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
        $scope.favLinks=customerInfo.fav_links;
        $scope.topPayee=customerInfo.top_payee;
    
        $scope.defaultData=true;
      
        var index=sessionStorage.getItem('currentIndex');
        $scope.transactionInfo=$scope.accountInfo[index];
    
    
    
    
	}
]);