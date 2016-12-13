clearbank.component('userRegistration' ,{

    templateUrl: 'main/partials/registration.html',
    controller: function registrationController(RegistrationService) {
        var self = this;
        $('.nameError,.cidError,.mailError,.passError,.passError2,.contactError').hide();
        $('.cName').on('blur', function () {
            if (self.customerName === undefined) {
                $('.nameError').show('200');

            }

        });
        $('.cId').on('blur', function () {
            if (self.customerId === undefined) {
                $('.cidError').show('200');

            }

        });

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

        $('.cPass').on('blur', function () {
            if (self.customerPassword === undefined) {
                $('.passError').show('200');

            }

        });
        $('.cPass2').on('blur', function () {
            if (self.customerPassword != self.confirmedPassword) {
                $('.passError2').show('200');

            } else {
                $('.passError2').hide('200');

            }
        });

        self.save = function () {

            /*  CommonData.setData({
            csId: $scope.cid,
            phn: $scope.phn,
            pwd: $scope.cpass
		});
		 */
            //window.location.href="/login";
            if (!(self.customerName === undefined || self.customerId === undefined || self.customerContact === undefined || self.customerEmail === undefined || self.customerPassword === undefined)) {
                RegistrationService.RegisterCustomer(self.customerName, self.customerId, self.customerContact, self.customerEmail, self.customerPassword, function (response) {
                    console.log(response);
                    alert(response);
                    window.location.href = "/";
                })

            } else if (self.customerPassword != $scope.confirmedPassword) {
                $('.passError2').show('200');
            } else {
                $('.passError2').hide('200');
                $('.nameError,.cidError,.mailError,.passError,.contactError').show();
            }
        }
    }
});
