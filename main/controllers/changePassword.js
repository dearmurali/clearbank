"use strict";
var clearbank=angular.module("ClearBank",[]);
clearbank.controller("navController",function($scope){
	this.heading="ClearBank";
})

clearbank.controller("forgotPassController",['$scope',function($scope){

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
		console.log(this.changeSuccessWidget);
		 }
	}

}])