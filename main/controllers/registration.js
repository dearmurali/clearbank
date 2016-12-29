clearbank.controller('registrationController', function ($scope, RegistrationService) {
    $('.nameError,.cidError,.mailError,.passError,.passError2,.contactError').hide();
    $('.cName').on('blur', function () {
        if ($scope.customerName === undefined) {
            $('.nameError').show('200');

        }

    });
    $('.cId').on('blur', function () {
        if ($scope.customerId === undefined) {
            $('.cidError').show('200');

        }

    });

    $('.contact').on('blur', function () {
        if ($scope.customerContact === undefined) {
            $('.contactError').show('200');

        }

    });


    $('.cMail').on('blur', function () {
        if ($scope.customerEmail === undefined) {
            $('.mailError').show('200');

        }

    });

    $('.cPass').on('blur', function () {
        if ($scope.customerPassword === undefined) {
            $('.passError').show('200');

        }

    });
    $('.cPass2').on('blur', function () {
        if ($scope.customerPassword !== $scope.confirmedPassword) {
            $('.passError2').show('200');

        } else {
            $('.passError2').hide('200');

        }
    });

    $scope.save = function () {

        /*  CommonData.setData({
            csId: $scope.cid,
            phn: $scope.phn,
            pwd: $scope.cpass
		});
		 */
        //window.location.href="/login";
        if (!($scope.customerName === undefined || $scope.customerId === undefined || $scope.customerContact === undefined || $scope.customerEmail === undefined || $scope.customerPassword === undefined)) {
            RegistrationService.RegisterCustomer($scope.customerName, $scope.customerId, $scope.customerContact, $scope.customerEmail, $scope.customerPassword, function (response) {
                console.log(response);
                alert(response);
                window.location.href = "/";
            })

        } else if ($scope.customerPassword !== $scope.confirmedPassword) {
            $('.passError2').show('200');
        } else {
            $('.passError2').hide('200');
            $('.nameError,.cidError,.mailError,.passError,.contactError').show();
        }
    }
});
