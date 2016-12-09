clearbank.controller('loginController',['$scope','LoginService', '$state', function($scope, LoginService, $state	){
		
	this.heading="ClearBank";
	$scope.validCredentials=true;
	
	//console.log(LoginService.validLogin('1234567891','Mindtree@123'));
	$scope.onLogin=function(){
        console.log("in login service");
		LoginService.validLogin($scope.customer_id,$scope.pwd, function(result){
			//console.log('result ',result);
			if(result == "success"){
				$scope.validCredentials=true;
				//window.location.href="/#dashboard";
				 $state.transitionTo('dashboard',{});
			}
			else{
			//	alert("Invalid ID and/or password.");
			$scope.validCredentials=false;
			}
		});
	};
	}
]);



