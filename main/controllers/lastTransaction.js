clearbank.controller('lastTransactionController',['$scope','lastTransactionService', function($scope,lastTransactionService){
    
        $scope.accName = sessionStorage.getItem('customerName');
    $scope.accNumber=sessionStorage.getItem('accountNumber');
    $scope.accBalance=sessionStorage.getItem('accountBalance');
    $scope.accCurrency=sessionStorage.getItem('currency');
    
        
        var index=sessionStorage.getItem('currentIndex');
        $scope.accId=localStorage.getItem('customerId');
	    $scope.showTransactions=false;
  
        var info=JSON.parse(sessionStorage.getItem('accountInfo'));
        $scope.transactionInfo=info[index];                                
    
    
//    var currentAccountNumber=info[index].accountnumber;
//     lastTransactionsService.getTransactionData(index,accId,function(result){   
//        console.log("transaction data");
//        console.log(result);
//        $scope.lastTransactionInfo=result;
//        console.log(result);
//		});
//    lastTransactionsService.getTransactionData(index,accId,function(result){
//        console.log("transaction data");
//        console.log(result);
//        $scope.lastTransactionInfo=result;
//        console.log(result);
//		});
    
    $scope.showTransaction=function(){
        
          var currentAccountNumber=info[index].account_number;
        console.log(currentAccountNumber);
     lastTransactionService.getTransactionData($scope.accid,currentAccountNumber,function(result){   
        console.log("transaction data");
        console.log(result);
        $scope.lastTransactionInfo=result;
        console.log(result);
       console.log("SHOW the transactions")
     });
    }
}]);
