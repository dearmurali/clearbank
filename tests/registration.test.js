describe("Test cases for Registration controller", function () {
    //this will be called before calling each spec
    beforeEach(angular.mock.module('ClearBank')); // this initialises our module
    var $controller;
    //this is for inject function, so as to resolve refrence for $controller serveice
    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    // to get instance of registrationController.
    beforeEach(function () {
        $scope = {};
        controller = $controller("registrationController", {
            $scope: $scope
        });
    });
    it("should check that none of the fields is left empty", function () {
        $scope.customerName = "test test";
        $scope.customerId = 1234567890;
        $scope.customerContact = 9418311994;
        $scope.customerEmail = "abc@test.com";
        $scope.customerPassword = "Cle@rbank123";
        $scope.confirmedPassword = "Cle@rbank123";
        expect($scope.customerName).toMatch(/^[a-z A-Z]+$/);
        expect($scope.customerId).toEqual(jasmine.any(Number));

        expect($scope.customerEmail).toEqual(jasmine.any(String));

        expect($scope.customerPassword).toEqual($scope.confirmedPassword);

        $scope.save();
        expect(window.location.href).toContain("/");
    })

})
