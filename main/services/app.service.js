"use strict";
var app=angular.module("clearBank");
app.service('bankService',function(){
	var CustomerData = [{
		csId: "1234567890",
		phn:"0000000001",
        pwd: "Mindtree@123"
}];
	var addCustomer=function(newObj){
		CustomerData.push(newObj);
	}
	var getCustomer=function(){
		return CustomerData;
	}
	var editCustomer=function(ndx,newPass){
		CustomerData.splice(ndx,0,{'pwd':newPass});
	}
	return {
		addCustomer:addCustomer,
		getCustomer:getCustomer,
		editCustomer:editCustomer
	}
});