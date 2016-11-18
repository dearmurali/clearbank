"use strict";
var app=angular.module("clearBank");
app.controller("cbController",function($scope){
	console.log("akash");
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
		
		
});