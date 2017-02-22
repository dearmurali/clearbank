clearbank.service('MutualFundService', function ($http) {
	return {


		getInformation: function (callback) {
			console.log("mf service");
			//			console.log(index+" "+accId);
			$http({
					method: "GET",
					url: "http://localhost:3000/assets/data/mutualFunds.json"
				})
				.then(
					function (result) {
						console.log("inside service")
						callback(result.data.mutualfunds);
						console.log(result.data);
					},
					function (err) {
						callback("some error occured" + err);
						console.log(err)
					}
				)
		},

		getStatement: function (callback) {
			console.log("mf service");
			//			console.log(index+" "+accId);
			$http({
					method: "GET",
					url: "http://localhost:3000/assets/data/MFStatement.json"
				})
				.then(
					function (result) {
						console.log("inside service")
						callback(result.data.MFAccount);
						console.log(result.data);
					},
					function (err) {
						callback("some error occured" + err);
						console.log(err)
					}
				)
		}

	}
});
