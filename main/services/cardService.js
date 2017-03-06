'use strict';

clearbank.service('cardService', function ($http) {
	return {

		getCard: function (cardType, callback) {

			$http({
				method: "GET",
				url: "http://localhost:3000/assets/data/cards.json"

			}).then(
				function (result) {
					for (i = 0; i < result.data.cardDetails.length; i++) {
						if (result.data.cardDetails[i].type === cardType) {
							callback(result.data.cardDetails[i].detail);
						}
					}
				},
				function (err) {
					callback("some error occured " + err)

				}
			)
		}

	}
});
