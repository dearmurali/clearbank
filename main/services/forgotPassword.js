'use strict';
clearbank.service('ForgotPasswordService', function ($http) {
	return {
		validateMobileNumber: function (mobile_number, callback) {
			$http({
					method: "POST",
					url: "http://10.80.190.161:9090/clearbank-1.0/validate/mobile",
					data: {
						"customermobile": mobile_number
					}
				})
				.then(
					function (result) {
						callback(result);
					},
					function (err) {
						callback(err);
					}
				)
		},

		resetPassword: function (mobile, password, callback) {
			$http({
					method: "POST",
					url: "http://10.80.190.161:9090/clearbank-1.0/resetpassword",
					data: {
						"customermobile": mobile,
						"password": password
					}
				})
				.then(
					function (result) {
						callback(result);
					},
					function (err) {
						callback(err);
					}
				)
		}

	}
});
