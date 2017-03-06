
clearbank.controller('loginMobileController', function ($scope, LoginService, $state, $mdDialog) {

	this.showHomePage = function () {
		if (location.hash === '#!/loginmobile' || location.hash === '#!/forgotPasswordMobile' || location.hash === '#!/registerMobile') {

			window.location.href = '#!/'
			location.reload();
		}

	}
	const self = this;
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
				sessionStorage.setItem('isLoggedIn', true);
				window.location.href = window.location.href.split('!')[0] + '!/dashboard';
				location.reload();
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



})
