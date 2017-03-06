'use strict';
clearbank.service('lastTransactionService', function ($http) {
	return {
		getTransactionData: function (index, accId, callback) {
			$http({
				method: "get",
				url: "http://localhost:3000/assets/data/transactionData.json"
			}).then(
				function (result) {
					for (i = 0; i < result.data.transactionData.length; i++) {
						if (accId === result.data.transactionData[i].csId) {
							callback(result.data.transactionData[i].accountInfo[index].transactions);
						}
					}
				},
				function (err) {
					callback("some error occured " + err);
				});
		}

	}
});
