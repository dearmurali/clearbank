clearbank.component('login', {
    templateUrl: 'main/partials/login.html',
    controller: function loginController(LoginService, $state) {
        this.heading = "ClearBank";
        this.validCredentials = true;
        this.customer_id=sessionStorage.getItem('csid');
        //console.log(LoginService.validLogin('1234567891','Mindtree@123'));
        this.onLogin = function () {
            console.log("in login service");
            LoginService.validLogin(this.customer_id, this.pwd, function (result) {
                //console.log('result ',result);
                if (result == "success") {
                    this.validCredentials = true;
                  
                     sessionStorage.setItem('isLoggedIn',true);
                    console.log('session',sessionStorage.getItem('isLoggedIn'));
                
                     console.log(window.location.href);

                    window.location.href=window.location.href+'dashboard';
                } else {
                    //	alert("Invalid ID and/or password.");
                    this.validCredentials = false;
                }
            });
        };
    }

})
