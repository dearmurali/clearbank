//UNIT TEST CASES FOR FORGOT PASSWORD

describe('testing  forgotPassword Controller', function() {
  beforeEach(module('ClearBank'));

  var $controller;

  beforeEach(inject(function(_$controller_){
   
    $controller = _$controller_;
  }));
  describe('test the widget to be displayed',function(){
	  it('should check which widget is displayed',function(){
		  var $scope={};
		  var controller=$controller("forgotPasswordController",{$scope:$scope});
		  expect($scope.forgotPasswordWidget).toBe(true);
		  expect($scope.No_match).toBe(undefined);
	  })
	})
describe("function to be executed when submit is done",function(){
	
	var $controller;
	beforeEach(angular.mock.inject(function(_$controller_) {
		$controller=_$controller_;
	}));
	
	describe("change submit function",function(){
		beforeEach(function(){
			$scope={};
			controller=$controller("forgotPasswordController",{$scope:$scope});
		})
		it("should check if passwords are equal",function(){
		
			$scope.changePassword="clearBank123";
			$scope.confirmPassword="clearBank123";
			$scope.changeSubmit();
			expect($scope.No_match).toBe(false);
			expect($scope.forgotPasswordWidget).toBe(false);
			expect($scope.changeSuccessWidget).toBe(true);
		})
		it("should check if passwords are not equal",function(){
			
			$scope.changePassword="clearBank123";
			$scope.confirmPassword="bankclear123"
			$scope.changeSubmit();
			expect($scope.No_match).toBe(true);	
		})
	})
})
})