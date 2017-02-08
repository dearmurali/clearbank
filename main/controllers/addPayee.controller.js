clearbank.controller('addPayeeController', ['$scope', '$mdDialog', 'PayeeServices', function ($scope, $mdDialog, PayeeServices) {

	this.accountType = "";
	this.accountTypes = [{
		type: "Savings"
	}, {
		type: "Current"
	}];
	this.setLimit = true;
	this.compareAccountNumber = function () {
		if (this.accountNumber !== this.reEnterAccountNumber) {

			this.accountMatchFail = true;
		} else {
			this.accountMatchFail = false;
		}
	}

	// when save button is clicked//

	this.savePayee = function () {
		//console.log(this.payeeName);
		if (this.accountNumber === undefined || this.reEnterAccountNumber === undefined || this.accountType === undefined || this.ifscCode === undefined || this.payeeName === undefined || this.payeeNickName === undefined) {
			this.emptyFields = true;
			this.emptyFields = true;
			//        console.log("found")
		}
		//        console.log(this.accountNumber);
		if (this.setLimitOption === "yes") {
			//                console.log(this.transferLimit);
			if (this.transferLimit === undefined) {
				this.emptyFields = true;
			}
		}
		if (this.accountNumber !== undefined && this.reEnterAccountNumber !== undefined && this.accountType !== undefined && this.ifscCode !== undefined && this.payeeName !== undefined && this.payeeNickName !== undefined && (this.accountNumber === this.reEnterAccountNumber)) {
			if (this.setLimitOption === "yes" && this.transferLimit !== undefined) {
				this.emptyFields = false;
				//               console.log(this.transferLimit);
				//               console.log("Calling service with limit value");

				self.newPayee = {

					"payeeAccountNumber": this.accountNumber,
					"payeeName": this.payeeName,
					"payeeNickName": this.payeeNickName,
					"payeeIFSC": this.ifscCode,
					"payeeLimit": this.transferLimit,
					"customerid": sessionStorage.getItem('customerId')
				}
				
				this.showModal();
			}

			//service call with limit


			if (this.setLimitOption === "no" || this.setLimitOption === undefined) {
				this.emptyFields = false;
				//           console.log("Calling service without limit");
				self.newPayee = {
					"payeeAccountNumber": this.accountNumber,
					"payeeName": this.payeeName,
					"payeeNickName": this.payeeNickName,
					"payeeIFSC": this.ifscCode,
					"payeeLimit": null,
					"customerid": sessionStorage.getItem('customerId')
				}

				this.showModal();
			}
			
			console.log("new payee ",self.newPayee);
		}
	}

		this.checkLimit = function (option) {
			//           console.log(option);
			if (option === "yes") {
				this.setLimit = false;
			} else {
				this.setLimit = true;
			}
		}
	this.showModal = function () {
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
