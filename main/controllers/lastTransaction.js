//
//clearbank.controller('lastTransactionController', ['$scope', 'lastTransactionService', function ($scope, lastTransactionService) {
//
//    $scope.accName = sessionStorage.getItem('customerName');
//    $scope.accNumber = sessionStorage.getItem('accountNumber');
//    $scope.accBalance = sessionStorage.getItem('accountBalance');
//    $scope.accCurrency = sessionStorage.getItem('currency');
//
//    var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
//    $scope.favLinks = customerInfo.fav_links;
//    $scope.topPayee = customerInfo.top_payee;
//
//
//    var index = sessionStorage.getItem('currentIndex');
//    $scope.accId = sessionStorage.getItem('customerId');
//    $scope.showTransactions = false;
//
//    var info = JSON.parse(sessionStorage.getItem('accountInfo'));
//    $scope.transactionInfo = info[index];
//    var customerID = $scope.accId;
//    var currentAccountNumber = $scope.transactionInfo.account_number;
//    var accountType = $scope.transactionInfo.account_type;
//
//    var token = sessionStorage.getItem('token');

//    $scope.showTransaction = function () {
//        lastTransactionService.getTransactionData(currentAccountNumber, accountType, customerID, token, function (result) {
//            console.log("transaction data");
//            console.log(result);
//            $scope.lastTransactionInfo = result;
//            console.log(result);
//        });
//    }



clearbank.controller('lastTransactionController',['$scope','lastTransactionService', function($scope,lastTransactionService){
    
        $scope.accName = sessionStorage.getItem('customerName');
    $scope.accNumber=sessionStorage.getItem('accountNumber');
    $scope.accBalance=sessionStorage.getItem('accountBalance');
    $scope.accCurrency=sessionStorage.getItem('currency');
    
        var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
        $scope.favLinks=customerInfo.fav_links;
        $scope.topPayee=customerInfo.top_payee;
        
        
        var index=sessionStorage.getItem('currentIndex');
        $scope.accId=localStorage.getItem('customerId');
	    $scope.showTransactions=false;

        var info=JSON.parse(sessionStorage.getItem('accountInfo'));
        $scope.transactionInfo=info[index];                                
        var customerID=$scope.accId;
        var currentAccountNumber=$scope.transactionInfo.account_number;
        var accountType=$scope.transactionInfo.account_type;    
    
        var token=sessionStorage.getItem('token');    
     $scope.showTransaction=function(){
     lastTransactionService.getTransactionData(currentAccountNumber,accountType,customerID,token,function(result){   
        console.log("transaction data");
        console.log(result);
        $scope.lastTransactionInfo=result;
        console.log(result);
		});
     }
 
}]);
