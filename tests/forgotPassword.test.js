//Unit test for forgot password

describe('testing  forgotPassword Controller', function () {
    //this will be called before calling each spec 
    beforeEach(module('ClearBank'));
    var $controller;
    //this is for inject function, so as to resolve refrence for $controller serveice
    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));
    describe('test the widget to be displayed', function () {
        it('should check which widget is displayed', function () {
            var $scope = {};
            var controller = $controller("forgotPasswordController", {
                $scope: $scope
            });
            expect($scope.forgotPasswordWidget).toBe(true);
            expect($scope.No_match).toBe(undefined);
        })
    })
    describe("function to be executed when submit is done", function () {

        var $controller;
        beforeEach(angular.mock.inject(function (_$controller_) {
            $controller = _$controller_;
        }));

        describe("change submit function", function () {
            beforeEach(function () {
                $scope = {};
                controller = $controller("forgotPasswordController", {
                    $scope: $scope
                });
            })

            it("should check the length of password is less than 8", function () {
                $scope.changePassword = "Cb@k13";
                console.log('the length of password is', $scope.changePassword.length);
                expect($scope.changePassword.length).toBeLessThan(7);

            })
            it("should check the length of password is greater than 8", function () {
                $scope.changePassword = "Clearb@nk13";
                console.log('the length of password is', $scope.changePassword.length);
                expect($scope.changePassword.length).toBeGreaterThan(7);
            })

            it("should check if passwords are equal", function () {
                var searchString = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
                $scope.changePassword = "Clearb@nk1";
                $scope.confirmPassword = "Clearb@nk1";
                $scope.changeSubmit();
                expect($scope.No_match).toBe(false);
                expect($scope.changePassword).toMatch(searchString);
                expect($scope.forgotPasswordWidget).toBe(false);
                expect($scope.changeSuccessWidget).toBe(true);
            })
            it("should check if passwords are not equal", function () {

                $scope.changePassword = "cle@rBank123";
                $scope.confirmPassword = "bankcle@r123"
                $scope.changeSubmit();
                expect($scope.No_match).toBe(true);
            })
        })
    })
})
