
clearbank.controller('addPayeeController', ['$scope', '$mdDialog', 'PayeeServices', function ($scope, $mdDialog, PayeeServices) {
	const self = this;
	self.payeeType = "";
	self.disable = true;
	self.PayeeTypes = [
		{
			type: "Own account in clearBank"
	},
		{
			type: "Other in clearBank"
	}, {
			type: "InterBank"
	}];
	self.setLimit = true;
	self.compareAccountNumber = function () {
		if (self.accountNumber !== self.reEnterAccountNumber) {

			self.accountMatchFail = true;
		} else {
			self.accountMatchFail = false;
		}
	}

	self.isSame = function () {

		if (self.payeeType !== 0) {
			self.disable = false;
		} else {
			self.disable = true;
		}

	};
	// when save button is clicked//

	self.savePayee = function () {
		if (self.accountNumber === undefined || self.reEnterAccountNumber === undefined || self.payeeType === undefined || self.payeeName === undefined || self.payeeNickName === undefined) {
			self.emptyFields = true;
			self.emptyFields = true;

		}

		if (self.setLimitOption === "yes") {

			if (self.transferLimit === undefined) {
				self.emptyFields = true;
			}
		}
		if (self.accountNumber !== undefined && self.reEnterAccountNumber !== undefined && self.payeeType !== undefined && self.payeeName !== undefined && self.payeeNickName !== undefined && (self.accountNumber === self.reEnterAccountNumber)) {
			if (self.setLimitOption === "yes" && self.transferLimit !== undefined) {
				self.emptyFields = false;
				self.newPayee = {

					"payeeAccountNumber": self.accountNumber,
					"payeeName": self.payeeName,
					"payeeNickName": self.payeeNickName,
					"payeeIFSC": self.ifscCode,
					"payeeType": self.payeeType.toString(),
					"payeeLimit": self.transferLimit,
					"customerid": sessionStorage.getItem('customerId')
				}
				PayeeServices.addNewPayee(self.newPayee, function (response) {
					self.showModal();
				});

			}
			if (self.setLimitOption === "no" || self.setLimitOption === undefined) {
				self.emptyFields = false;
				self.newPayee = {
					"payeeAccountNumber": self.accountNumber,
					"payeeName": self.payeeName,
					"payeeNickName": self.payeeNickName,
					"payeeIFSC": self.ifscCode,
					"payeeType": self.payeeType.toString(),
					"payeeLimit": 5000,
					"customerid": sessionStorage.getItem('customerId')
				}

				PayeeServices.addNewPayee(self.newPayee, function (response) {
					self.showModal();
				})
			}
		}
	}

	self.checkLimit = function (option) {
		if (option === "yes") {
			self.setLimit = false;
		} else {
			self.setLimit = true;
		}
	}
	self.showModal = function () {
		$mdDialog.show({
			controller: modalController,
			templateUrl: 'views/addPayeeSuccessModal.html',
			clickOutsideToClose: false
		})
	}

	function modalController($scope, $mdDialog) {
		$scope.cancel = function () {
			$mdDialog.cancel();
		};


	};

}])
