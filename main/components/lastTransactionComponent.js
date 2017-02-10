'use strict';


clearbank.component("lastTransaction", {

	templateUrl: "main/partials/lastTransaction.html",
	transclude: true,


	controller: function leftTransactionController(lastTransactionService) {
		var self = this;

		self.accName = sessionStorage.getItem('customerName');
		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

		var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		self.favLinks = customerInfo.fav_links;
		self.topPayee = customerInfo.top_payee;


		var index = sessionStorage.getItem('currentIndex');
		self.accId = sessionStorage.getItem('customerId');
		self.showTransactions = false;

		//       console.log(index);

		var info = JSON.parse(sessionStorage.getItem('accountInfo'));
		self.transactionInfo = info[index];

		var customerID = self.accId;
		        var currentAccountNumber=self.transactionInfo.account_number;
		        var accountType=self.transactionInfo.account_type;    


		self.showTransactions = false;

		//        var token=sessionStorage.getItem('token');    

		lastTransactionService.getTransactionData(index, customerID, function (result) {
			      console.log("transaction data");
			       console.log(result);
			self.lastTransactionInfo = result;
//			console.log(self.lastTransactionInfo);
		});


		self.getColor = function (index) {
			if (self.lastTransactionInfo[index].type === "Cr")
				return "green";
			else
				return "red";

		}
	}
});
