clearbank.controller("editPayeeController", function ($scope, $mdDialog) {

	this.accountNumber = sessionStorage.getItem('editAccountNumber');
	this.reEnterAccountNumber = sessionStorage.getItem('editAccountNumber');
	this.accountType = sessionStorage.getItem('editAccountType');
    if(this.accountType==='Saving'){
        this.Savings=true;
        this.current="false";
    this.accType0="Savings";
    }
    else{
        console.log("in current")
    this.accType1='Current';
        this.Savings=false;
        this.current="true";
    }
	this.ifscCode = sessionStorage.getItem('editIFSCcode');
	this.payeeName = sessionStorage.getItem('editName');
	this.payeeNickName = sessionStorage.getItem('editNickname');
	this.setLimit = true;
	this.checkLimit = function (option) {
		//console.log(option);
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
				"payeeLimit":this.transferLimit ,
				"payeeNickName": this.payeeNickName,
				"customerid": sessionStorage.getItem('customerId')
			} 
			console.log("updated payee object",self.updatedPayee)
			this.showModal();
			//			console.log("Saving")
		}
	}

	this.showModal = function () {
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
