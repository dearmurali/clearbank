clearbank.component("cardDetail", {

	templateUrl: "main/partials/cards.html",
	controller: function (cardService) {

		var self = this;

		self.defaultData = true;

		self.getCardData = function (cardType) {
			//        console.log(cardType); 
			cardService.getCard(cardType, function (result) {

				self.cardDetails = result;
				//        console.log(self.cardDetails);
			});
		}
		cardService.getCard("airline", function (result) {
			self.cardDetails = result;
		});


	}

});
