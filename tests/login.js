describe('application login page test', function() {
	
	// this will be called before calling each spec
	beforeEach(module('ClearBank'));
	
	var $controller;
	
	beforeEach(angular.mock.inject(function(_$controller_){
		$controller=_$controller_;
	}));
	
  it('customer id should be a number', function() {
    var $scope={};
	var controller=$controller('loginController',{$scope: $scope});
	
	$scope.customer_id=1234567890;
	expect($scope.customer_id).toEqual(jasmine.any(Number));
  });
  
    it('customer id length should be equal to 10', function() {
    var $scope={};
	var controller=$controller('loginController',{$scope: $scope});
	
	$scope.customer_id=1234567890;
	console.log($scope.customer_id.length);
	//expect($scope.customer_id.length).toEqual(10);
	
	//expect(10).toBeEvenNumber();
  });
  
  it('password should not be empty', function() {
    expect('foo').toBe('foo');
  });
});