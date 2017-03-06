
clearbank.service('transferService', function ($http) {
	return {

		getPayeedata: function (csId, callback) {

			$http({
				method: "GET",
				url: "http://localhost:3000/assets/data/payeeData.json",

			}).then(

				function (result) {
					for (i = 0; i < result.data.payeeData.length; i++) {
						if (result.data.payeeData[i].csId === csId) {
							callback(result.data.payeeData[i].payee);
						}
					}
				},
				function (err) {
					callback('some error occurred' + err);
				}
			)
		}

	}
});
