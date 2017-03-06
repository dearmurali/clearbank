
angular.module("ClearBank")

.component('homeImage', {
	templateUrl: 'views/homeBanner.html',
	controller: function (LoginService, $state, $scope, $mdDialog) {
		const self = this;
		if (window.location.href.includes('Admin')) {
			self.adminNav = true;
		} else {
			self.adminNav = false;
		}
		this.inputType = 'password';
		self.heading = "ClearBank";
		this.eyeOpen = true;
		self.validCredentials = true;
		self.customer_id = sessionStorage.getItem('csid');
		self.showPassword = function () {
			this.inputType = 'text';
			this.eyeOpen = false;
			this.eyeClosed = true;
		}

		self.hidePassword = function () {
			this.inputType = "password"
			this.eyeOpen = true;
			this.eyeClosed = false;
		}

		self.onLogin = function () {
			if (this.customer_id === undefined || this.pwd === undefined) {
				self.validCredentials = false;
			} else {
				self.validCredentials = true;
			}
			LoginService.validLogin(self.customer_id, self.pwd, function (result) {

				if (result === "success") {
					self.validCredentials = true;

					window.location.href = window.location.href + 'clearbankAdmin';
					//					window.location.href = window.location.href + 'dashboard';
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

		self.register = function () {
			$mdDialog.show({
				clickOutsideToClose: true,
				templateUrl: '../views/registration.html',
				scope: $scope,

			});
		};


	}

})
