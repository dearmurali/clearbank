clearbank = angular.module('ClearBank', ['ngRoute','ngMessages','ngAnimate','ui.router']);

clearbank.config(function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home',{
			url:'/',
			templateUrl: 'views/home.html'
		})
		
		.state('login',{
			url:'/login',	
			templateUrl: 'views/login/login.html',
			controller:'loginController'
		})
		
		.state('register',{
			url:'/register',
			templateUrl: 'views/registration.html',
			controller: 'registrationController'
		})
		
		.state('forgotpassword',{
			url:'/forgotpassword',
			templateUrl: 'views/forgotPassword.html',
			controller: 'forgotPasswordController'
		})
		
		.state('dashboard',{
			url:'/dashboard',
			templateUrl: 'views/dashboard.html'
		})
	
	
	/*
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
	*/
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});

//clearbank.run(['$state', function ($state) {
	//$state.transitionTo('home');
//}]);

/*
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
]);*/

/*clearbank.controller('navController','CommonData', '$state', function($scope, CommonData, $state){
	this.heading="ClearBank";
	console.log('inside nav controller');
	//$state.go('home');
})*/

clearbank.controller("forgotPasswordController",['$scope', function($scope){

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
		 
		/* for(i=0;i<CommonData.getData().length;i++)
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
		    }*/
	}
}]);

clearbank.controller('registrationController', function($scope){
	var isValid=true;
	$('.nameError,.cidError,.mailError,.passError,.passError2,.contactError').hide();
	$('.cName').on('blur',function(){
		if($scope.customerName===undefined){
			$('.nameError').show('200');
            isValid=false;
			}
        else isValid=true;
		});
		$('.cId').on('blur',function(){
			if($scope.customerId===undefined){
			$('.cidError').show('200');
                isValid=false;
			}
            else isValid=true;
		});
		
    $('.contact').on('blur',function(){
			if($scope.customerContact===undefined){
			$('.contactError').show('200');
                isValid=false;
			}
        else isValid=true;
		});
		
    
		$('.cMail').on('blur',function(){
			if($scope.customerEmail===undefined){
			$('.mailError').show('200');
                isValid=false;
			}
            else isValid=true;
		});
		
		$('.cPass').on('blur',function(){ 
			if($scope.customerPassword===undefined){
			$('.passError').show('200');
                isValid=false;
			}
            else isValid=true;
		});
		$('.cPass2').on('blur',function(){
			if($scope.customerPassword!=$scope.confirmedPassword){
				$('.passError2').show('200');
                isValid=false;
			}else{
				$('.passError2').hide('200');
              isValid=true;
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