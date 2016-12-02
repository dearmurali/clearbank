clearbank.controller('dashboardController',['$scope','$cookies','dashboardService', function($scope,$cookies, dashboardService){

	    
		$scope.accName=$cookies.get('customerName');
        $scope.accNumber=$cookies.get('customerNumber');
        $scope.accBalance=$cookies.get('customerBalance');
	    $scope.accCurrency=$cookies.get('currency');
        var accId=$cookies.get('customerId');
    
    $scope.getIndex=function(index){
    $cookies.put('currentIndex',index);
    }
    
    dashboardService.getData(accId, function(result){
			$scope.accountInfo=result;
		});
	}
]);