'use strict';

clearbank.component('editProfile', {

	templateUrl: 'main/partials/editProfile.html',
	transclude: true,
	controller: function (editProfileService, $state) {
		var self = this;
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
				//                console.log(self.customerAddress);
			}
		});

		self.token = sessionStorage.getItem('token');
		self.update = function () {
			//            console.log("saving")
			//            console.log(self.customerId,self.customerName, self.customerContact, self.customerEmail, self.customerAddress,self.token)
			if (!(self.customerContact === undefined || self.customerEmail === undefined)) {
				//                console.log("asdyrewu73674873234");
				editProfileService.UpdateProfile(self.customerId, self.customerContact, self.customerEmail, self.customerAddress, self.token, function (response) {
					//                    console.log(response);
					alert(response);
					$state.go('dashboard', {});
				})

			} else {
				alert("enter mandatory details");
			}
		}
	}
});
