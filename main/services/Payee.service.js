clearbank.service('PayeeServices', function ($http) {
	return {


		addNewPayee: function (callback) {
			console.log("add payee service");
			//			console.log(index+" "+accId);
			$http({
					method: "POST",
					url: "http://localhost:8080/clearbank/addPayee",
					data: {
						"payeeAccountNumber": 12334345,
						"payeeName": "rajni1",
						"payeeAccountType": "Savings",
						"payeeNickName": "rajni_nick",
						"payeeIFSC": "BPL123",
						"payeeLimit": 100.0,
						"customerid": 1
					}

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

		UpdatePayee: function (callback) {
			console.log("add payee service");
			//			console.log(index+" "+accId);
			$http({
					method: "POST",
					url: "http://localhost:8080/clearbank/updatePayee",
					data: {
						"payeeAccountNumber": 12334345,
						"payeeIFSC": "BPL123",
						"payeeLimit": 100.0,
						"payeeNickName": "rajni_nick",
						"customerid": 1
					}


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


	}
});
