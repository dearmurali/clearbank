/*clearbank.controller('loginController',['$scope','LoginService', function($scope, LoginService){
	
	$scope.cIdCheck=/^[0-9]{10}$/;
	$scope.pwdCheck= /^[a-z][A-Z]0-9!@#$%^&*_-]{8,20}$/;
	this.heading="ClearBank";
	$scope.validCredentials=true;
	
	//console.log(LoginService.validLogin('1234567891','Mindtree@123'));
	$scope.onLogin=function(){
		if($scope.cId==undefined)
		{
			alert("Customer Id can't be empty");
			loginForm.csId.focus();
			return false;
		}
		if($scope.pwd==undefined)
		{
			alert("Password can't be empty");
			loginForm.pswd.focus();
			return false;
		}
		
		LoginService.validLogin($scope.cId,$scope.pwd, function(result){
			//console.log('result ',result);
			if(result == "success"){
				$scope.validCredentials=true;
				window.location.href="/#dashboard";
			}
			else{
			//	alert("Invalid ID and/or password.");
			$scope.validCredentials=false;
			}
		});
	};
	}
]);*/

clearbank.service('LoginService',function($http){
	return{
		validLogin:function(customer_id, password, callback){
			//console.log(customer_id, password, callback);
			$http({
				method:"get",
				url:"http://localhost:3000/assets/data.json"
			}).then(
				//success
				function(result){
					//console.log(result);
					//validate customer
					var i, valid = false;
					for(i=0;i<result.data.customerData.length;i++){
						//console.log('inside for');
						if(customer_id === result.data.customerData[i].csId && password === result.data.customerData[i].pwd){
							console.log('inside if');
							valid = true;
							callback('success');
						}
					}
					if(valid === false){
						callback('false');
					}
				},
				//error
				function(err){
					console.log('some error occurred');
				}
			)
		},
		
		resetPassword:function(data){
			CustomerData.push(data);
		},
		
		registerUser:function(data){
			CustomerData.push(data);
		}
	}
})