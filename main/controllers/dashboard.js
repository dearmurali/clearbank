clearbank.controller('dashboardController', ['$scope', '$cookies',function ($scope, $cookies) {


        $scope.accName = localStorage.getItem('customerName');
        $scope.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
    
        $scope.defaultData=true;
    
        $scope.getIndex = function (index) {
         localStorage.setItem('currentIndex', index);
         $scope.defaultData=false;
        }
        
        var index=localStorage.getItem('currentIndex');
        var info=JSON.parse(localStorage.getItem('accountInfo'));
        $scope.transactionInfo=info[index];
        

	}

]);
