
clearbank.service('PayeeServices', function ($http) {
	return {
		addNewPayee: function (newPayee, callback) {

			$http({
					method: "POST",
					url: "http://10.80.190.161:9090/clearbank-1.0/addPayee",
					data: newPayee
				})
				.then(
					function (result) {
						callback(result.data.success);
					},
					function (err) {
						callback("some error occured" + err);
					});
		},

		updatePayee: function (updatedPayee, callback) {

			$http({
					method: "POST",
					url: "http://10.80.190.161:9090/clearbank-1.0/updatePayee",
					data: updatedPayee
				})
				.then(
					function (result) {
						callback(result.data);
					},
					function (err) {
						callback("some error occured" + err);
					});
		},

		getPayeeList: function (customerId, callback) {
			$http({
					method: "GET",
					url: "http://10.80.190.161:9090/clearbank-1.0/payeeList?customerId=" + customerId,

				})
				.then(
					function (result) {
						callback(result.data.payeeData);
					},
					function (err) {
						callback("some error occured" + err);
					}
				)

		},

		deletePayee: function (payeeData, callback) {
			$http({
					method: "POST",
					url: "http://10.80.190.161:9090/clearbank-1.0/deletePayee",
					data: payeeData

				})
				.then(
					function (result) {
						callback(result.data.success);
					},
					function (err) {
						callback("some error occured" + err);
					}
				)

		}

	}
});
