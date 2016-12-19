clearbank.controller('dashboardController', ['$scope', function ($scope) {


        $scope.accName = sessionStorage.getItem('customerName');
    console.log($scope.accName);
        $scope.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
    console.log($scope.accountInfo);
    $scope.accNumber=sessionStorage.getItem('accountNumber');
    $scope.accBalance=sessionStorage.getItem('accountBalance');
    $scope.accCurrency=sessionStorage.getItem('currency');
    $scope.accType=sessionStorage.getItem('accountType');

    
        $scope.defaultData=true;
    
         $scope.getIndex = function (index) {
         sessionStorage.setItem('currentIndex', index);
         $scope.defaultData=false;
        }
        
        var index=sessionStorage.getItem('currentIndex');
        $scope.transactionInfo=$scope.accountInfo[index];
        

	}

]);
