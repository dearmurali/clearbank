describe("Test cases for Registration controller",function(){
	beforeEach(angular.mock.module('ClearBank'));
	var $controller;
	beforeEach(angular.mock.inject(function(_$controller_){
		$controller=_$controller_;
	}));
	beforeEach(function(){
		$scope={};
		ocntroller=$controller("registrationController",{$scope:$scope});
	});
	it("should check that none of the fields is left empty",function(){
		$scope.customerName="test";
		$scope.customerId="1234567890";
		$scope.customerContact="9418311994";
		$scope.customerEmail="abc@test.com";
		$scope.customerPassword="clearbank123";
		$scope.confirmedPassword="clearbank123";
		expect($scope.customerPassword).toEqual($scope.confirmedPassword);
		$scope.save();
		expect(window.location.href).toContain("/");
	})
	
})