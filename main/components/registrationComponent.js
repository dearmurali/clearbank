clearbank.component('userRegistration', {

    templateUrl: 'main/partials/registration.html',
    controller: function (RegistrationService, $mdDialog, $scope) {
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
            if (self.customerPassword !== self.confirmedPassword) {
                $('.passError2').show('200');

            } else {
                $('.passError2').hide('200');

            }
        });

        self.closeDialog = function () {
                        $mdDialog.hide();

             window.location.href = "/";


        }

        self.save = function () {
//            console.log("saving")
//            console.log(self.customerName, self.customerContact, self.customerEmail, self.customerPassword)
            if (!(self.customerName === undefined || self.customerContact === undefined || self.customerEmail === undefined || self.customerPassword === undefined || self.customerPassword !== self.confirmedPassword)) {

                RegistrationService.RegisterCustomer(self.customerName, self.customerContact, self.customerEmail, self.customerPassword, function (response) {
//                    console.log(response);
                    self.registrationId = response;
                    //alert(response);
                    self.showAlert(self.registrationId);

                })

            } else if (self.customerPassword !== self.confirmedPassword) {
                $('.passError2').show('200');
              
            } else {
                $('.passError2').hide('200');
                $('.nameError,.mailError,.passError,.contactError').show();

            }
        } 


        self.showAlert = function () {
            $mdDialog.show({
                clickOutsideToClose: true,
                controller: registrationController,
                scope:$scope,
                preserveScope: true,
                templateUrl: 'main/partials/registrationSuccess.html'
            });
        };
    }
});
