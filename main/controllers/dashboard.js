clearbank.controller('dashboardController',['$scope','$cookies','dashboardService', function($scope,$cookies, dashboardService){

	    
		$scope.accName=$cookies.get('customerName');
		dashboardService.getData($scope.cId, function(result){
			$scope.accountInfo=result;
		});
	}
]);