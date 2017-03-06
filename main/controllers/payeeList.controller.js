'use strict';
clearbank.controller("payeeListController", ['$scope', 'PayeeServices', function ($scope, PayeeServices) {
	const self = this;
	PayeeServices.getPayeeList(sessionStorage.getItem('customerId'), function (result) {
		self.payees = result.payee;
	})

	this.deletePayee = function (ndx) {
		let deletePayees = confirm("Are you sure you want to delete this item");
		if (deletePayees === true) {
			self.payee = {
				"payeeAccountNumber": self.payees[ndx].payeeAccountNumber,
				"payeeIFSC": self.payees[ndx].payeeIFSC,
				"customerid": sessionStorage.getItem('customerId')
			}

			PayeeServices.deletePayee(self.payee, function (response) {
				if (response == true)
					window.location.reload(true);
			})
		}
	}
	this.getDetails = function (ndx) {
		sessionStorage.setItem('editAccountNumber', self.payees[ndx].payeeAccountNumber);
		sessionStorage.setItem('editName', self.payees[ndx].payeeName);

		sessionStorage.setItem('editAccountType', self.payees[ndx].payeeType);
		sessionStorage.setItem('editIFSCcode', self.payees[ndx].payeeIFSC);
		sessionStorage.setItem('editNickname', self.payees[ndx].nickName)
		sessionStorage.setItem('payeelimit', self.payees[ndx].payeeLimit)
	}
}])
