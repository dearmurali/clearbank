clearbank.controller('lastTransactionsController',['$scope','lastTransactionsService', function($scope,lastTransactionsService){
    
        $scope.accName = localStorage.getItem('customerName');
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
    
        
        var index=localStorage.getItem('currentIndex');
        var accId=localStorage.getItem('customerId');
	    $scope.showTransactions=false;
  
        var info=JSON.parse(localStorage.getItem('accountInfo'));
        $scope.transactionInfo=info[index];                                
    
    
//    var currentAccountNumber=info[index].accountnumber;
//     lastTransactionsService.getTransactionData(index,accId,function(result){   
//        console.log("transaction data");
//        console.log(result);
//        $scope.lastTransactionInfo=result;
//        console.log(result);
//		});
    lastTransactionsService.getTransactionData(index,accId,function(result){
        console.log("transaction data");
        console.log(result);
        $scope.lastTransactionInfo=result;
        console.log(result);
		});
    
    $scope.showTransaction=function(){
       
		$scope.showTransactions=!$scope.showTransactions;
       
	}
}              
]);