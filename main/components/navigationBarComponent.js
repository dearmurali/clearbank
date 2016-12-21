clearbank.component("navigationBar", {
    templateUrl: "main/partials/navigationBar.html",
    controller: function navigationBarController($state, $scope) {
        var self = this;
        $scope.loggedIn = false;
        console.log("be4 login", $scope.loggedIn);

        var intervalId = setInterval(function () {
            console.log('First name being reset');
            $scope.$apply(function () {
                $scope.loggedIn = sessionStorage.getItem('isLoggedIn');
                self.accName = sessionStorage.getItem('customerName');
                if ($scope.loggedIn) {
                    console.log("esdfasdf");
                    clearInterval(intervalId);
                }
            })
        }, 100);
        console.log(intervalId);


        console.log(self.accName);

        self.logout = function () {
            sessionStorage.clear();
            window.location.href = '/';
        }
    }
});
