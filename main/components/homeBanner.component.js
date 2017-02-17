'use strict';


angular.module("ClearBank")

.component('homeImage',{
        templateUrl:'views/homeBanner.html',
    controller: function (LoginService, $state, $scope, $mdDialog) {
        var self = this;
        this.inputType='password';
        self.heading = "ClearBank";
        this.eyeOpen=true;
        self.validCredentials = true;
        self.customer_id = sessionStorage.getItem('csid');
        //console.log(LoginService.validLogin('1234567891','Mindtree@123'))
        self.showPassword=function(){
            this.inputType='text';
            this.eyeOpen=false;
            this.eyeClosed=true;
        }
        
        self.hidePassword=function(){
            this.inputType="password"
            this.eyeOpen=true;
            this.eyeClosed=false;
        }
        
        self.onLogin = function () {
           if(this.customer_id===undefined || this.pwd===undefined)
           {
           self.validCredentials = false;
           }
            else{
            self.validCredentials = true;
            }
//            console.log("in login service");
            LoginService.validLogin(self.customer_id, self.pwd, function (result) {
                console.log(result+"asdas");
                if (result === "success") {
                    self.validCredentials = true;
                    sessionStorage.setItem('isLoggedIn', true);
//                    console.log('session', sessionStorage.getItem('isLoggedIn'));

//                    console.log(window.location.href);

					window.location.href = window.location.href + 'clearbankAdmin';
//					window.location.href = window.location.href + 'dashboard';
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
		
		self.register = function () {
            $mdDialog.show({
                clickOutsideToClose: true,
                templateUrl: '../views/registration.html',
                scope: $scope,
          
            });
        };
		
		
    }

})