'use strict';

clearbank.component('login', {
	templateUrl: 'main/partials/login.html',
	controller: function (LoginService, $state, $scope, $mdDialog) {
		const self = this;
		self.heading = "ClearBank";
		self.validCredentials = true;
		self.customer_id = sessionStorage.getItem('csid');
		self.onLogin = function () {

			LoginService.validLogin(self.customer_id, self.pwd, function (result) {

				if (result === "success") {
					self.validCredentials = true;
					sessionStorage.setItem('isLoggedIn', true);
					window.location.href = window.location.href + 'clearbankAdmin';
				} else {

					self.validCredentials = false;
				}
			});
		};

		self.showForm = function () {
			$mdDialog.show({
				clickOutsideToClose: true,
				templateUrl: 'main/partials/forgotDialog.html',
				scope: $scope,
				preserveScope: true,
			});
		};
	}

})
