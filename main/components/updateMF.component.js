'use strict';
clearbank.component('updateMutualFund', {
	templateUrl: 'main/partials/updateMF.html',
	controller: function mfController(MutualFundService) {
		const self = this;
		self.isDisabled = -1;
		self.navHeading = "Update Mutual Funds";
		MutualFundService.getStatement(function (result) {

			self.MFStatement = result;
			self.enable = function (ndx) {
				self.isDisabled = ndx;
			}
		});
	}
})
