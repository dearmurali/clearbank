clearbank.component("cardDetail", {

	templateUrl: "main/partials/cards.html",
	controller: function (cardService) {

		var self = this;

		self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
		var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		self.favLinks = customerInfo.fav_links;
		self.topPayee = customerInfo.top_payee;
		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

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
