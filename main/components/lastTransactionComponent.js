
clearbank.component("lastTransaction", {

	templateUrl: "main/partials/lastTransaction.html",
	transclude: true,


	controller: function leftTransactionController(lastTransactionService) {
		const self = this;

		self.accName = sessionStorage.getItem('customerName');
		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

		let customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		self.favLinks = customerInfo.fav_links;
		self.topPayee = customerInfo.top_payee;

		let index = sessionStorage.getItem('currentIndex');
		self.accId = sessionStorage.getItem('customerId');
		self.showTransactions = false;


		let info = JSON.parse(sessionStorage.getItem('accountInfo'));
		self.transactionInfo = info[index];

		let customerID = self.accId;
		let currentAccountNumber = self.transactionInfo.account_number;
		let accountType = self.transactionInfo.account_type;


		self.showTransactions = false;


		lastTransactionService.getTransactionData(index, customerID, function (result) {

			self.lastTransactionInfo = result;
		});


		self.getColor = function (index) {
			if (self.lastTransactionInfo[index].type === "Cr")
				return "green";
			else
				return "red";

		}
	}
});
