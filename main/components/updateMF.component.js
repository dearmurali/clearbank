clearbank.component('updateMutualFund', {
	templateUrl: 'main/partials/updateMF.html',
	controller: function mfController(MutualFundService) {
		var self = this;
		self.isDisabled = -1;
		self.navHeading="Update Mutual Funds";
		console.log("in mfcontroller");
		MutualFundService.getStatement(function (result) {

			self.MFStatement = result;
			console.log(self.MFStatement);
			self.enable = function (ndx) {
				self.isDisabled = ndx;
			}
		});
	}
})
