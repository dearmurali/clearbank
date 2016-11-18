var app=angular.module("clrBank",['ngMessages']);
app.controller("clearBank",function($scope){
	
	$scope.cIdCheck=/^[0-9]{10}$/;
	$scope.pwdCheck= /^[a-z][A-Z]0-9!@#$%^&*_-]{8,20}$/;
	
	
	$scope.onLogin=function(){
		console.log("entered function");
		console.log($scope.cId);
		if($scope.cId=="")
			{
			console.log("entered functiion cid");
			alert("Can't leave any field empty!!!")
		    loginForm.csId.focus();
			return false;
			}
		if($scope.pwd=="")
			{
			console.log("entered functiion pwd");
			alert("Can't leave any field empty!!!")
			loginForm.pswd.focus();
			return false;
			}
		else{
			return false;
		}
	};
});




