'use strict';


clearbank.component('forgotDialog', {
    transclude: true,
    templateUrl: 'main/partials/forgotDialog.html',
    controller: function forgotPasswordDialogController($scope,ForgotPasswordService,$mdDialog) {
        var self = this;
        self.forgotPasswordWidget = true;
        self.checkNumber = true;
        self.changeSubmit = function () {
            if (self.mobileNumber === undefined) {
                self.checkMobile = false;
            }

            if (self.changePassword !== self.confirmPassword || self.changePassword === undefined || self.confirmPassword === undefined) {
                self.No_match = true;
                self.changeSuccessWidget = false;
            } else if (self.changePassword === self.confirmPassword && self.checkNumber === true) {
                ForgotPasswordService.resetPassword(self.mobileNumber, self.changePassword, function (result) {
                    self.No_match = false;
                    self.forgotPasswordWidget = false;
                    self.changeSuccessWidget = true;

                })
            }
        }
        self.closeDialog = function () {
            $mdDialog.close();
        }
        self.checkMobile = function (mobileNumber) {
//            console.log(mobileNumber);
            ForgotPasswordService.validateMobileNumber(mobileNumber, function (result) {

                if (result.data.success === false) {
                    self.checkNumber = false;

                }

                if (result.data.success) {
//                    console.log(self.checkNumber);
                    self.checkNumber = true;
//                    console.log(self.checkNumber);
                }

            });
        }

    }
});
