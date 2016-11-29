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
			templateUrl: 'views/dashboard.html',
			controller:'dashboardController'
		})
		
		.state('lastTransactions',{
			url:'/lastTransactions',
			templateUrl: 'views/lastTransactions.html',
			controller : 'lastTransactionsController'
		})
		
		
		.state('transfers',{
			url:'/transfers',
			templateUrl: 'views/transfers.html'
		})
		
		.state('mutualfunds',{
			url:'/mutualfunds',
			templateUrl: 'views/mutualfunds.html'
		})
		
		.state('contactus',{
			url:'/contactus',
			templateUrl: 'views/contactus.html'
		})
		
		.state('cards',{
			url:'/cards',
			templateUrl: 'views/cards.html'
		})
		
		.state('managepayee',{
			url:'/managepayee',
			templateUrl: 'views/managepayee.html'
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
clearbank.directive("navigationBar", function() {
    return {
        restrict : "E",
        templateUrl : "Partials/navigationBar.html"
    };
});

clearbank.directive("topMenu", function() {
    return {
        restrict : "E",
        templateUrl : "Partials/topMenu.html"
    };
});

clearbank.directive("leftMenu", function() {
    return {
        restrict : "E",
        templateUrl : "Partials/leftMenu.html"
    };
});

clearbank.directive("accounts", function() {
    return {
        restrict : "E",
        templateUrl : "Partials/accounts.html"
    };
});

clearbank.controller('lastTransactionsController',function($scope){
	$scope.showTransactions=false;
	$scope.showTransaction=function(){
		$scope.showTransactions=!$scope.showTransactions;
	}
});


clearbank.controller('dashboardController',['$scope','dashboardService', function($scope, dashboardService){

	    
		
		dashboardService.getData($scope.cId, function(result){
			$scope.accountInfo=result;
		});
	}
]);


clearbank.controller("forgotPasswordController",['$scope', function($scope){

	//function to confirm change password submission
	$scope.forgotPasswordWidget=true;
	$scope.changeSubmit=function()
	{		
		 if($scope.changePassword!=$scope.confirmPassword)
		 {
			$scope.No_match=true;
		 }
		 else if($scope.changePassword===$scope.confirmPassword)
		 {
			 $scope.No_match=false;
			 $scope.forgotPasswordWidget=false;
			 $scope.changeSuccessWidget=true;
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
		if(isValid){
		alert('Successfully registered');
		window.location.href="/";
		}
		}
});