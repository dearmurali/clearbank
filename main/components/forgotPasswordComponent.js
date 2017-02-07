'use strict';

clearbank.component('forgotPassword', {
	transclude: true,
	templateUrl: 'main/partials/forgotPassword.html',
	controller: function (ForgotPasswordService) {
		var self = this;
		self.forgotPasswordWidget = true;
		self.disable = true;
		self.checkNumber = true;
		self.changeSubmit = function () {
			if (self.mobileNumber === undefined) {
				self.checkNumber = false;
			}

			if (self.changePassword !== self.confirmPassword || self.changePassword === undefined || self.confirmPassword === undefined) {
				self.No_match = true;
				self.changeSuccessWidget = false;
			} else if (self.changePassword === self.confirmPassword && self.checkNumber === true) {
				ForgotPasswordService.resetPassword(self.mobileNumber, self.changePassword, function (result) {
					self.No_match = false;
					self.forgotPasswordWidget = false;
					self.changeSuccessWidget = true;
					sessionStorage.clear();
					window.location.href = '/';
				})
			}
		}

		self.checkMobile = function (mobileNumber) {
			//			console.log(mobileNumber);
			ForgotPasswordService.validateMobileNumber(mobileNumber, function (result) {

				if (result.data.success === false) {
					self.checkNumber = false;
					self.disable = true;
				}

				if (result.data.success) {
					//					console.log(self.checkNumber);
					self.checkNumber = true;
					self.disable = false;
					//					console.log(self.checkNumber);
				}

			});
		}

	}
});
