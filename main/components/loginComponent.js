clearbank.component('login', {
    templateUrl: 'main/partials/login.html',
    controller: function loginController(LoginService, $state, $scope, $mdDialog) {
        var self = this;
        self.heading = "ClearBank";
        self.validCredentials = true;
        self.customer_id = sessionStorage.getItem('csid');
        //console.log(LoginService.validLogin('1234567891','Mindtree@123'));
        self.onLogin = function () {
            console.log("in login service");
            LoginService.validLogin(self.customer_id, self.pwd, function (result) {
                //console.log('result ',result);
                if (result == "success") {
                    self.validCredentials = true;

                    sessionStorage.setItem('isLoggedIn', true);
                    console.log('session', sessionStorage.getItem('isLoggedIn'));

                    console.log(window.location.href);

                    window.location.href = window.location.href + 'dashboard';
                } else {
                    //	alert("Invalid ID and/or password.");
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
