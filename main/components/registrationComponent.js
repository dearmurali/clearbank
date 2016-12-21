clearbank.component('userRegistration', {

    templateUrl: 'main/partials/registration.html',
    controller: function registrationController(RegistrationService) {
        var self = this;
        $('.nameError,.mailError,.passError,.passError2,.contactError').hide();
        $('.cName').on('blur', function () {
            if (self.customerName === undefined) {
                $('.nameError').show('200');

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
            console.log("saving")
            console.log(self.customerName,self.customerContact, self.customerEmail,self.customerPassword)
            if (!(self.customerName === undefined || self.customerContact === undefined || self.customerEmail === undefined || self.customerPassword === undefined)) {
                
                RegistrationService.RegisterCustomer(self.customerName, self.customerContact, self.customerEmail, self.customerPassword, function (response) {
                    console.log(response);
                    alert(response);
//                    window.location.href = "/";
                })

            } else if (self.customerPassword != self.confirmedPassword) {
                $('.passError2').show('200');
            } else {
                $('.passError2').hide('200');
                $('.nameError,.mailError,.passError,.contactError').show();
            }
        }
    }
});
