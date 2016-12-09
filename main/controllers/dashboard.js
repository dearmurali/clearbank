clearbank.controller('dashboardController', ['$scope', '$cookies', 'LoginService', function ($scope, $cookies) {


        $scope.accName = localStorage.getItem('customerName');
        $scope.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
        console.log($scope.accountInfo);
        $scope.getIndex = function (index) {
           localStorage.setItem('currentIndex', index);
        }



	}

]);
