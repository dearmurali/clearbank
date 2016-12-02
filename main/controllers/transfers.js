clearbank.controller('transfersController',['$scope','$cookies', function($scope,$cookies){

	    
		$scope.accName=$cookies.get('customerName');
        $scope.accNumber=$cookies.get('customerNumber');
        $scope.accBalance=$cookies.get('customerBalance');
	    $scope.accCurrency=$cookies.get('currency');
    
	}
]);