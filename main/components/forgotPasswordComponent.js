clearbank.component('forgotPassword', {
    transclude: true,
    templateUrl: 'main/partials/forgotPassword.html',
    controller: function forgotPasswordController() {
        var self = this;
        self.forgotPasswordWidget = true;
        self.changeSubmit = function () {
            if (self.changePassword != self.confirmPassword) {
                self.No_match = true;
            } else if (self.changePassword === self.confirmPassword) {
                self.No_match = false;
                self.forgotPasswordWidget = false;
                self.changeSuccessWidget = true;
            }
        }
    }


});
