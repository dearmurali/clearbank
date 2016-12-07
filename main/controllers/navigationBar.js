clearbank.controller('navigationBar',['$scope','$cookies', function($scope,$cookies){
		
	$scope.accName=$cookies.get('customerName');
	
	}
]);



