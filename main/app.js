var clearbank = angular.module('ClearBank', ['ngRoute','ngMessages']);

clearbank.config(function($routeProvider, $locationProvider) {

    $routeProvider
		.when('/', {
            templateUrl: 'views/home.html'
        })
	
        .when('/login', {
            templateUrl: 'views/login/login.html',
			controller:'loginController'
        })
		
		.when('/register', {
            templateUrl: 'views/registration.html',
			controller: 'registrationController'
        })
		
		.when('/forgotpassword',{
			templateUrl: 'views/forgotPassword.html',
			controller: 'forgotPasswordController'
		})
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});
clearbank.controller('loginController',['$scope',function($scope,bankService){
	
	$scope.cIdCheck=/^[0-9]{10}$/;
	$scope.pwdCheck= /^[a-z][A-Z]0-9!@#$%^&*_-]{8,20}$/;
	this.heading="ClearBank";
	
	$scope.onLogin=function(){
		if($scope.cId==undefined)
			{
			console.log("entered functiion cid");
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
		else{
			var cs=bankService.getCustomer();
			for(i=0;i<cs.length;i++)
			{
			if($scope.cId==cs[i].csId && $scope.pwd==cs[i].pwd )
			{
		     window.location.href="index.html";
			}
			else{
				alert("Incorrect username or password")
			}
			
		}
	};
	}
}]);

clearbank.controller("navController",function($scope){
	this.heading="ClearBank";
})

clearbank.controller("forgotPasswordController",['$scope',function($scope,bankService){

	//function to confirm change password submission
	this.forgotPasswordWidget=true;
	this.changeSubmit=function()
	{
		 if(this.confirmPassword==undefined || this.changePassword.length!=this.confirmPassword.length || this.changePassword!=this.confirmPassword)
		 {
			this.noMatch=true;
		 }
		 else if(this.changePassword===this.confirmPassword)
		 {
			 this.noMatch=false;
			 this.forgotPasswordWidget=false;
			 this.changeSuccessWidget=true;
			 
			 
			 var cs=bankService.getCustomer();
			 for(i=0;i<cs.length;i++)
				{
				 
				if($scope.nums==cs[i].phn)
				{
			        bankService.ediCustomer(i,$scope.changePassword);
					window.location.href="index.html";
				}
			    }
		 }
		 
		 
	}
}]);

clearbank.controller("registrationController",function($scope,bankService){
	var isValid=true;
	var name=$scope.cname;
	var mail=$scope.cmail;
	var cid=$scope.cid;
	var cpass=$scope.cpass;
	var ccpass=$scope.ccpass;
	$('.nameError,.cidError,.mailError,.passError,.passError2').hide();
	$('.cName').on('blur',function(){
		if($scope.cname===undefined){
			$('.nameError').show('200');
			isvalid=false;
			}
		else flag=true;
		});
		$('.cId').on('blur',function(){
			if($scope.cid===undefined){
			$('.cidError').show('200');
			flag=false;
			}
			else flag=true;
		});
		
		$('.cMail').on('blur',function(){
			if($scope.cmail===undefined){
			$('.mailError').show('200');
			flag=false;
			}else flag=true;
		});
		
		$('.cPass').on('blur',function(){ 
			if($scope.cpass===undefined){
			$('.passError').show('200');
			flag=false;
			}else flag=true;
		});
		
		$('.cPass2').on('blur',function(){
			if($scope.cpass!=$scope.ccpass){
				$('.passError2').show('200');
				flag=false;
			}else{
				$('.passError2').hide('200');
				flag=true;
			}
		});
		
		$scope.save=function(){
			if(isValid){
				var obj = {
					csId: $scope.cid,
					phn:$scope.phn,
			        pwd: $scope.cpass
			};
			bankService.addCustomer(obj);
				
			
				window.location.href="index.html";
			}
		}
});