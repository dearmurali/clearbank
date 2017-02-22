clearbank.component('updateMutualFund',{
	templateUrl : 'main/partials/updateMF.html',
	controller: function mfController (MutualFundService){
		var self=this;
		console.log("in mfcontroller");
		MutualFundService.getStatement(function (result) {
			
			self.MFStatement = result;
			
			console.log(self.MFStatement);
		});
	}
})