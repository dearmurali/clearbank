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
    self.selectLanguage=function(languageOption)
    {
      
        if(languageOption===1)
        {
        //console.log(languageOption);
            $(".dropdownButton").html('<span class="flag-icon flag-icon-nl"></span> Dutch  <span class="caret"></span>');
        }
        if(languageOption===2)
        {
        $(".dropdownButton").html('<span class="flag-icon flag-icon-us"></span> United States  <span class="caret"></span>');
        }
 // $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
}
    }
});
