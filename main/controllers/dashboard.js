clearbank.controller('dashboardController', ['$scope', '$cookies',function ($scope, $cookies) {


        $scope.accName = localStorage.getItem('customerName');
    
        $scope.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
        console.log($scope.accountInfo);
    
        var customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
        $scope.favLinks=customerInfo.fav_links;
        $scope.topPayee=customerInfo.top_payee;

    
    $scope.accNumber=localStorage.getItem('accountNumber');
    $scope.accBalance=localStorage.getItem('accountBalance');
    $scope.accCurrency=localStorage.getItem('currency');
    $scope.accType=localStorage.getItem('accountType');

    
        $scope.defaultData=true;
    
         $scope.getIndex = function (index) {
         localStorage.setItem('currentIndex', index);
         $scope.defaultData=false;
        }
        
        var index=localStorage.getItem('currentIndex');
        $scope.transactionInfo=$scope.accountInfo[index];
        

	}

]);
