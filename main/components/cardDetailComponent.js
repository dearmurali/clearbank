'use strict';

clearbank.component("creditCard", {

	templateUrl: "main/partials/creditcards.html",
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


clearbank.component("debitCard", {

	templateUrl: "main/partials/debitcards.html",
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

clearbank.component("travelCard", {

	templateUrl: "main/partials/travelcards.html",
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

clearbank.component("internationalCard", {

	templateUrl: "main/partials/internationalcards.html",
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


clearbank.component("prepaidCard", {

	templateUrl: "main/partials/prepaidcards.html",
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
