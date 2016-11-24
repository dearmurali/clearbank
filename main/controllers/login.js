clearbank.controller('loginController',['$scope','LoginService', '$state', function($scope, LoginService, $state){
	
	$scope.cIdCheck=/^[0-9]{10}$/;
	$scope.pwdCheck= /^[a-z][A-Z]0-9!@#$%^&*_-]{8,20}$/;
	this.heading="ClearBank";
	$scope.validCredentials=true;
	
	//console.log(LoginService.validLogin('1234567891','Mindtree@123'));
	$scope.onLogin=function(){
		if($scope.customer_id==undefined)
		{
			alert("Customer Id can't be empty");
			//loginForm.customer_id.focus();
			return false;
		}
		if($scope.pwd==undefined)
		{
			alert("Password can't be empty");
			//loginForm.pswd.focus();
			return false;
		}
		
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



