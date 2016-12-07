clearbank.controller('lastTransactionsController',['$scope','$cookies','lastTransactionsService', function($scope,$cookies,lastTransactionsService){
    
        $scope.accName=$cookies.get('customerName');
        $scope.accNumber=$cookies.get('customerNumber');
        $scope.accBalance=$cookies.get('customerBalance');
	    $scope.accCurrency=$cookies.get('currency');
        
        
        var index=$cookies.get('currentIndex');
        var accId=$cookies.get('customerId');
	    $scope.showTransactions=false;
    
    lastTransactionsService.getData(index,accId,function(result){
			$scope.transactionInfo=result;
        console.log(result);
		});
    
    $scope.showTransaction=function(){
		$scope.showTransactions=!$scope.showTransactions;
	}
}
]);