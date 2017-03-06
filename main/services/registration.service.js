'use strict';
clearbank.service('RegistrationService', function ($http) {
	return {
		RegisterCustomer: function (customer_name, customer_mobile, customer_email, customer_password, callback) {
			$http({
				method: "POST",
				url: "http://10.80.190.161:9090/clearbank-1.0/register",
				data: {
					"password": customer_password,
					"customername": customer_name,
					"customermobile": customer_mobile,
					"customeremail": customer_email
				}
			}).then(
				function (result) {

					sessionStorage.setItem('csid', result.data.customerId);
					if (result.data.success) {
						callback(result.data.customerId);
					} else {
						callback("ERROR in registering: " + result.data.error)
					}
				},
				function (err) {
					callback('not registered');
				}
			)
		}
	}
});
