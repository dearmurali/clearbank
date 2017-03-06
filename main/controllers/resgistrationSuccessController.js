'use strict';
clearbank.controller('registrationSuccessController', function ($scope, $mdDialog) {
		const self = this
		self.registrationId = sessionStorage.getItem('csid');
		self.closeDialog = function () {
			$mdDialog.hide();
			window.location.href = "/";
		}
	}
);
