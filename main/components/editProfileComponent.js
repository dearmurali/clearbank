
clearbank.component('editProfile', {

	templateUrl: 'main/partials/editProfile.html',
	transclude: true,
	controller: function (editProfileService, $state) {
		const self = this;
		self.customerName = sessionStorage.getItem('customerName');
		self.customerId = sessionStorage.getItem('customerId');
		self.customerEmail = sessionStorage.getItem('customerMail');
		self.customerContact = sessionStorage.getItem('customerMobile');
		$('.contact').on('blur', function () {
			if (self.customerContact === undefined) {
				$('.contactError').show('200');
			}
		});
		$('.cMail').on('blur', function () {
			if (self.customerEmail === undefined) {
				$('.mailError').show('200');
			}
		});
		$('.cAddress').on('blur', function () {
			if (self.address === undefined) {
				$('.addressError').show('200');
			} else {
				self.customerAddress = self.address + self.city + self.state + self.postalCode;
			}
		});
		self.token = sessionStorage.getItem('token');
		self.update = function () {
			if (!(self.customerContact === undefined || self.customerEmail === undefined)) {
				editProfileService.UpdateProfile(self.customerId, self.customerContact, self.customerEmail, self.customerAddress, self.token, function (response) {
					$state.go('dashboard', {});
				})
			} else {
				alert("enter mandatory details");
			}
		}
	}
});
