clearbank.controller('lastTransactionsController',function($scope){
	$scope.showTransactions=false;
	$scope.showTransaction=function(){
		$scope.showTransactions=!$scope.showTransactions;
	}
});