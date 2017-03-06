
clearbank.service('MutualFundService', function ($http) {
	return {
		getInformation: function (callback) {
			$http({
					method: "GET",
					url: "http://localhost:3000/assets/data/mutualFunds.json"
				})
				.then(
					function (result) {
						callback(result.data.mutualfunds);

					},
					function (err) {
						callback("some error occured" + err);
					}
				)
		},

		getStatement: function (callback) {

			$http({
					method: "GET",
					url: "http://localhost:3000/assets/data/MFStatement.json"
				})
				.then(
					function (result) {
						callback(result.data.MFAccount);
					},
					function (err) {
						callback("some error occured" + err);
					}
				)
		}

	}
});
