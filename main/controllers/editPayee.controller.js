
clearbank.controller("editPayeeController", function ($scope, $mdDialog, PayeeServices) {


	this.accountNumber = sessionStorage.getItem('editAccountNumber');
	this.reEnterAccountNumber = sessionStorage.getItem('editAccountNumber');
	this.accountType = sessionStorage.getItem('editAccountType');

	this.transferLimit = sessionStorage.getItem('payeelimit');

	if (this.accountType === 1) {
		this.Savings = true;
		this.current = "false";
		this.accountType = "Other's account in clearBank";
	} else {
		this.accountType = "Other's account in other bank";
		this.Savings = false;
		this.current = "true";
	}

	this.ifscCode = sessionStorage.getItem('editIFSCcode');
	this.payeeName = sessionStorage.getItem('editName');
	this.payeeNickName = sessionStorage.getItem('editNickname');
	this.setLimit = true;
	this.checkLimit = function (option) {
		if (option === "yes") {
			this.setLimit = false;
		} else
			this.setLimit = true;
	}
	this.savePayee = function () {
		if (this.payeeNickName === undefined || (this.setLimit === false && this.transferLimit === undefined)) {
			this.emptyFields = true;
		} else {
			this.emptyFields = false;

			self.updatedPayee = {
				"payeeAccountNumber": this.accountNumber,
				"payeeIFSC": this.ifscCode,
				"payeeLimit": this.transferLimit,
				"payeeNickName": this.payeeNickName,
				"customerid": sessionStorage.getItem('customerId')
			}
			PayeeServices.updatePayee(self.updatedPayee, function (response) {
				self.showModal();
			})
		}
	}

	self.showModal = function () {
		$mdDialog.show({
			controller: modalController,
			templateUrl: 'views/modifyPayeeSuccessModal.html',
			clickOutsideToClose: false
		})
	}

	function modalController($scope, $mdDialog) {
		$scope.cancel = function () {
			$mdDialog.cancel();
		};
	}
})
