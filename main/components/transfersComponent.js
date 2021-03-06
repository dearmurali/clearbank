
clearbank.component("transferDetail", {

	templateUrl: "main/partials/transferDetail.html",
	transclude: true,
	controller: function transfersController(transferService, $mdDialog, $scope) {
		const self = this;

		self.accName = sessionStorage.getItem('customerName');
		self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

		let customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
		self.favLinks = customerInfo.fav_links;
		self.topPayee = customerInfo.top_payee;

		self.defaultData = true;

		let index = sessionStorage.getItem('currentIndex');
		self.transactionInfo = self.accountInfo[index];
		self.transferHeading = "Any Linked ClearBank Account";
		self.transferChoice = "";
		self.bankName = "";
		self.ifscCode = "";
		self.maxIMPSlimit = "10000";
		self.payeeData = [];



		self.selected1 = "1";
		self.selected2 = "1";
		self.transfer_type = "ownAccount";

		self.transferAccount = [];

		self.available_balance = "Choose Debit Account First";
		self.currency = "";

		for (var i = 0; i < self.accountInfo.length; i++) {

			if (self.accountInfo[i].account_type === "Current" || self.accountInfo[i].account_type === "Saving") {
				self.transferAccount.push({
					account_number: self.accountInfo[i].account_number,
					account_type: self.accountInfo[i].account_type,
					available_balance: self.accountInfo[i].available_balance,
					currency: self.accountInfo[i].currency
				});
			}
		}


		self.transferMethod = function () {


			for (i = 0; i < self.transferAccount.length; i++) {
				if (self.transferAccount[i].account_number == self.debitAccount) {
					self.available_balance = self.transferAccount[i].available_balance;
					self.currency = self.transferAccount[i].currency;
				}
			}

			if (self.selected1 === "1") {
				self.selected2 = "1";
				self.transferChoice = "";
				self.transfer_type = "ownAccount";
				self.transferHeading = "Your Linked ClearBank Account";

				$('.transferMethod').css('display', 'none');
			}

			if (self.selected1 === "2") {
				self.selected2 = "1";
				self.transfer_type = "sameBank";
				self.transferChoice = "";
				self.transferHeading = "Any Other ClearBank Account";

				$('.transferMethod').css('display', 'none');
			}

			if (self.selected1 === "3") {
				self.transfer_type = "otherBank";
				self.transferHeading = "Any Other Bank Account through";

				if (self.selected2 === "1")
					self.transferChoice = "NEFT";
				if (self.selected2 === "2")
					self.transferChoice = "RTGS";
				if (self.selected2 === "3")
					self.transferChoice = "IMPS";

				$('.transferMethod').css('display', 'block');
			}

			for (i = 0; i < self.payeeData.length; i++) {

				if (self.payeeData[i].payeeAccountNumber == self.payeeAccount) {
					self.bankName = self.payeeData[i].bankName;
					self.ifscCode = self.payeeData[i].ifscCode;
				}
			}

		}

		transferService.getPayeedata("1000000008", function (result) {

			for (i = 0; i < result.length; i++) {
				if (result[i].type === self.transfer_type) {
					self.payeeData = result[i].details;
				}
			}
		});

		self.checkFields = function () {

			if (self.debitAccount === undefined || self.payeeAccount === undefined || self.maxAmount === undefined || self.maxAmount === null) {
				$('.warning_transfer').css('display', 'block');
			} else {
				$('.warning_transfer').css('display', 'none');
			}

		}

		self.transferAmount = function () {

			if (self.debitAccount === undefined || self.payeeAccount === undefined || self.maxAmount === undefined || self.maxAmount === null) {
				$('.warning_fields').css('display', 'block');

			} else if (self.selected2 === "3") {

				if (self.maxAmount > 10000) {

					$('.warning_fields').css('display', 'none');
					$('.warning_maxAmount').css('display', 'none');
					$('.warning_maxIMPS').css('display', 'block');

				}

			} else {

				if (self.maxAmount > self.available_balance) {
					$('.warning_maxAmount').css('display', 'block');
				} else {
					$('.warning_fields').css('display', 'none');
					$('.warning_maxIMPS').css('display', 'none');
					$('.warning_maxAmount').css('display', 'none');
					self.showAlert();
				}
			}

		}

		self.closeAlert = function () {
			$mdDialog.hide();
		}

		self.showAlert = function () {
			$mdDialog.show({
				clickOutsideToClose: false,
				controller: transfersController,
				scope: $scope,
				preserveScope: true,
				templateUrl: 'main/partials/transferSuccess.html'
			});
		}

	}

});
