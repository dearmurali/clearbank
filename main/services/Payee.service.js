clearbank.service('PayeeServices', function ($http) {
	return {


		addNewPayee: function (newPayee,callback) {
			console.log("add payee service",newPayee );
			//			console.log(index+" "+accId);
			$http({
					method: "POST",
					url: "http://localhost:8080/clearbank/addPayee",
					data: newPayee
				})
				.then(
					function (result) {
						console.log("inside service")
						callback(result.data.success);
						console.log(result.data);
					},
					function (err) {
						callback("some error occured" + err);
						console.log(err)
					});
		},

		updatePayee: function (updatedPayee,callback) {
			console.log("add payee service");
			//			console.log(index+" "+accId);
			$http({
					method: "POST",
					url: "http://localhost:8080/clearbank/updatePayee",
					data: updatedPayee


				})
				.then(
					function (result) {
						console.log("inside service")
						callback(result.data);
						console.log(result.data);
					},
					function (err) {
						callback("some error occured" + err);
						console.log(err)
					});
		},

		getPayeeList: function (customerId,callback) {
			$http({
					method: "GET",
					url: "http://localhost:8080/clearbank/payeeList?customerId="+customerId,
					
				})
				.then(
					function (result) {
						//    console.log("inside service")
						console.log(result.data)
						callback(result.data.payeeData);
//						console.log("result", result.data.payeeData.payee, typeof (result.data.payeeData.payee));
					},
					function (err) {
						callback("some error occured" + err);
						//		console.log("Error")
					}
				)

		},

		deletePayee: function (payeeData,callback) {
			$http({
					method: "POST",
					url: "http://localhost:8080/clearbank/deletePayee",
					data: payeeData

				})
				.then(
					function (result) {
						//    console.log("inside service")
						callback(result.data.success);
					
					},
					function (err) {
						callback("some error occured" + err);
						//		console.log("Error")
					}
				)

		}

	}
});
