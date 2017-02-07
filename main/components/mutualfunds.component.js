'use strict';
clearbank.component("mutualFunds",{
	templateUrl:'main/partials/mutualFunds.html',
	controller: function(MutualFundService){
		var self=this;
		console.log("in mfcontroller");
		MutualFundService.getInformation(function (result) {
			
			self.MFData = result;
			
			console.log(self.MFData);
		});
	}
});

clearbank.component("mutualFundStatement",{
	templateUrl:'main/partials/mfStatement.html',
	controller: function(MutualFundService){
		var self=this;
		console.log("in mfcontroller");
		MutualFundService.getStatement(function (result) {
			
			self.MFStatement = result;
			
			console.log(self.MFStatement);
		});
	}
});