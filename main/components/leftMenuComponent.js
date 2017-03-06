
clearbank.component('leftMenu', {

	templateUrl: "main/partials/leftMenu.html",
	controller: function ($translate) {
		const self = this;

		self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));

		let customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		self.favLinks = customerInfo.fav_links;
		self.topPayee = customerInfo.top_payee;
		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.customerName = sessionStorage.getItem('customerName');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

		self.defaultData = true;

		self.getIndex = function (index) {

			sessionStorage.setItem('currentIndex', index);
			self.defaultData = false;

		}
		self.logout = function () {
			sessionStorage.clear();
			window.location.href = '/';
		}

		let index = sessionStorage.getItem('currentIndex');
		self.transactionInfo = self.accountInfo[index];
	}

});
