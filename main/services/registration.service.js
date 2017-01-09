clearbank.service('RegistrationService', function ($http) {
	return {
		RegisterCustomer: function (customer_name, customer_mobile, customer_email, customer_password, callback) {
//			console.log("in service")
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
//					console.log('successfully resistered ', result);
//					console.log(result.data);
					sessionStorage.setItem('csid', result.data.customerId);
					if (result.status === 200) {
						callback(result.data.customerId);
					} else {
						callback("ERROR in registering: " + result.data.error)
					}
				},
				function (err) {
//					console.log('some error occurred ', err);
					callback('not registered');
				}
			)
		}
	}
});
