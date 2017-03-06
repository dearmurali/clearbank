'use strict';
clearbank.component("mutualFunds", {
	templateUrl: 'main/partials/mutualFunds.html',
	controller: function (MutualFundService) {
		const self = this;

		MutualFundService.getInformation(function (result) {

			self.MFData = result;

		});
	}
});

clearbank.component("mutualFundStatement", {
	templateUrl: 'main/partials/mfStatement.html',
	controller: function (MutualFundService) {
		const self = this;

		MutualFundService.getStatement(function (result) {

			self.MFStatement = result;

		});
	}
});
