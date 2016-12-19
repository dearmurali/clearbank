clearbank.component("navigationBar", {
    templateUrl: "main/partials/navigationBar.html",
    controller: function navigationBarController($state, $scope) {
        var self = this;
        self.loggedIn = false;
        console.log("be4 login", self.loggedIn);
        //        $scope.$apply(function () {
        self.accName = sessionStorage.getItem('customerName');
        self.loggedIn = sessionStorage.getItem('isLoggedIn');
//       $state.reload();
        //        });
        console.log(self.accName);
      
        self.logout = function () {
                //            sessionStorage.setItem('isLoggedIn', false);
                //           this.loggedIn = sessionStorage.getItem('isLoggedIn');
                //            self.$apply(function (){
                //                sessionStorage.setItem('isLoggedIn', false);
                //            });
                sessionStorage.clear();
                $state.go('home', {});
            }
            //        self.$apply(function (){

        console.log('this.loggedIn', self.loggedIn);

        console.log('session after login', sessionStorage.getItem('isLoggedIn'));
        //        });

    }
});
