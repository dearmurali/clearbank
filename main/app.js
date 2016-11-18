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

$scope.CustomerData = [{
            csId: "1234567890",
			phn:"0000000001",
            pwd: "Mindtree@123"
        }
        }];
		
clearbank.controller('loginController',['$scope',function($scope){
	
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
			for(i=0;i<$scope.customerData.length;i++)
			{
			if($scope.cId==$scope.customerData[i].csId && $scope.pwd==$scope.customerData[i].pwd )
			{
		     window.location.href="index.html";
			}
		    }
		else{
			return false;
		}
	};
}]);

clearbank.controller("navController",function($scope){
	this.heading="ClearBank";
})

clearbank.controller("forgotPasswordController",['$scope',function($scope){

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
		 }
		 
		 for(i=0;i<$scope.customerData.length;i++)
			{
			if($scope.nums==$scope.customerData[i].phn &&)
			{
		        $scope.students.splice(i, 0, {
             pwd: $scope.changePassword
             
         }
		 window.location.href="index.html";
		 );
			}
		    }
	}
}]);

clearbank.controller("registrationController",function($scope){
	var name=$scope.cname;
	var mail=$scope.cmail;
	var cid=$scope.cid;
	var cpass=$scope.cpass;
	var ccpass=$scope.ccpass;
	$('.nameError,.cidError,.mailError,.passError,.passError2').hide();
	$('.cName').on('blur',function(){
		if($scope.cname===undefined){
			$('.nameError').show('200');
			}
		});
		$('.cId').on('blur',function(){
			if($scope.cid===undefined){
			$('.cidError').show('200');
			}
		});
		
		$('.cMail').on('blur',function(){
			if($scope.cmail===undefined){
			$('.mailError').show('200');
			}
		});
		
		$('.cPass').on('blur',function(){ 
			if($scope.cpass===undefined){
			$('.passError').show('200');
			}
		});
		$('.cPass2').on('blur',function(){
			if($scope.cpass!=$scope.ccpass){
				$('.passError2').show('200');
			}else{
				$('.passError2').hide('200');
			}
		});
		
		$scope.save=function(){
			
         $scope.customerData.push({
             csId: $scope.cid,
             phn: $scope.phn,
             pwd: $scope.cpass
		 });
       window.location.href="index.html";
		}
});