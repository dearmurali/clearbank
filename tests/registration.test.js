describe('Test cases for Registration controller', function() {

    var $componentController, controller;

  //  beforeEach(module('ui.router'));
    beforeEach(module('ClearBank'));

    beforeEach(inject(function($injector, $state) {
        $componentController = $injector.get('$componentController');
        controller = $componentController('userRegistration', { $scope: {} });
    }));
    it('should check weather contoller is defined', function() {
        expect(controller).toBeDefined;
    });
    
    it('should check none of the fields is left empty',function(){
       controller.customerName = "test test";
        controller.customerContact = 9418311994;
        controller.customerEmail = "abc@test.com";
        controller.customerPassword = "Cle@rbank123";
        controller.confirmedPassword = "Cle@rbank123";
        controller.save();
        
    })

//    it("should check that none of the fields is left empty", function () {
//        $scope.customerName = "test test";
//        $scope.customerId = 1234567890;
//        $scope.customerContact = 9418311994;
//        $scope.customerEmail = "abc@test.com";
//        $scope.customerPassword = "Cle@rbank123";
//        $scope.confirmedPassword = "Cle@rbank123";
//        expect($scope.customerName).toMatch(/^[a-z A-Z]+$/);
//        expect($scope.customerId).toEqual(jasmine.any(Number));
//
//        expect($scope.customerEmail).toEqual(jasmine.any(String));
//
//        expect($scope.customerPassword).toEqual($scope.confirmedPassword);
//
//        $scope.save();
//        expect(window.location.href).toContain("/");
//    })

})
