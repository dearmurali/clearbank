clearbank.controller('dashboardController', ['$scope', '$cookies', 'LoginService', function ($scope, $cookies) {


        $scope.accName = localStorage.getItem('customerName');
        $scope.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
        console.log($scope.accountInfo);
        $scope.getIndex = function (index) {
            $cookies.put('currentIndex', index);
        }



	}

]);
