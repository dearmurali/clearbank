clearbank = angular.module('ClearBank', ['ngRoute','ngMessages']);

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
		
		.when('/dashboard',{
			templateUrl: 'views/dashboard.html'
		})
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});
/*
$scope.CustomerData = [{
		csId: "1234567890",
		phn:"0000000001",
        pwd: "Mindtree@123"
}];
	*/	
clearbank.controller('loginController',['$scope','CommonData','LoginService', function($scope, CommonData, LoginService){
	
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
]);

clearbank.controller('navController','CommonData',function($scope, CommonData){
	this.heading="ClearBank";
})

clearbank.controller("forgotPasswordController",['$scope','CommonData', function($scope, CommonData){

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
		 
		 for(i=0;i<CommonData.getData().length;i++)
			{
			if($scope.nums==CommonData.getData()[i].phn)
			{
		        $scope.students.splice(i, 0,
					{
						pwd: $scope.changePassword
					}
				)
				window.location.href="/";
			}
		    }
	}
}]);

clearbank.controller('registrationController', function($scope){
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
			
      /*  CommonData.setData({
            csId: $scope.cid,
            phn: $scope.phn,
            pwd: $scope.cpass
		});
		 */
		//window.location.href="/login";
		alert('Successfully registered');
		window.location.href="/";
		}
});