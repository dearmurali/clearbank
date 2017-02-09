clearbank.controller("payeeListController", ['$scope', 'PayeeServices', function ($scope, PayeeServices) {
	//this.payees={"JOH"};
//	self.payees = [];
	var self=this;
	PayeeServices.getPayeeList(sessionStorage.getItem('customerId'),function (result) {
		console.log(result.payee+" is an "+typeof(result.payee));
			self.payees=result.payee;
//		
//			angular.forEach(result.payee, function (value, key) {
//				self.payees.push(value);
//			})
			 console.log("payees",self.payees);
		})
	  
//	this.values = self.payees;
//    console.log("values",this.values);

	this.deletePayee = function (ndx) {
		//    console.log(ndx);
		var deletePayees = confirm("Are you sure you want to delete this item");

		if (deletePayees === true) {
//			this.values.splice(ndx, 1);
			
			self.payee= {
						"payeeAccountNumber": self.payees[ndx].payeeAccountNumber,
						"payeeIFSC": self.payees[ndx].payeeIFSC,
						"customerid":sessionStorage.getItem('customerId')
					}
			
			PayeeServices.deletePayee(self.payee,function(response){
				if(response==true)
//				alert("payee "+self.payees[ndx].payeeName+" deletd!");
				window.location.reload(true);
			})
		}
	}
	this.getDetails = function (ndx) {
		//console.log(ndx);

		sessionStorage.setItem('editAccountNumber', self.payees[ndx].payeeAccountNumber);
		sessionStorage.setItem('editName', self.payees[ndx].payeeName);

		sessionStorage.setItem('editAccountType', self.payees[ndx].payeeType);
		sessionStorage.setItem('editIFSCcode', self.payees[ndx].payeeIFSC);
		sessionStorage.setItem('editNickname', self.payees[ndx].nickName)
		sessionStorage.setItem('payeelimit', self.payees[ndx].payeeLimit)
	} 
}])
 