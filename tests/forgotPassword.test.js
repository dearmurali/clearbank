//UNIT TEST CASES FOR FORGOT PASSWORD

describe('forgotPasswordController', function() {
  beforeEach(module('ClearBank'));

  var $controller;

  beforeEach(inject(function(_$controller_){
   
    $controller = _$controller_;
  }));
  describe('$scope.forgotpasswordwidget',function(){
	  it('should check which widget is displayed',function(){
		  var $scope={};
		  var controller=$controller("forgotPasswordController",{$scope:$scope});
		  expect($scope.forgotPasswordWidget).toBe(true);
		  expect($scope.No_match).toBe(undefined);
	  })
	})
describe("$scope.changeSubmit",function(){
	
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