clearbank.controller('transfersController',['$scope','$mdDialog','transferService',function($scope,$mdDialog,transferService){
  
    var self=$scope;
     $scope.accName = sessionStorage.getItem('customerName');
     $scope.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
    $scope.accNumber=sessionStorage.getItem('accountNumber');
    $scope.accBalance=sessionStorage.getItem('accountBalance');
    $scope.accCurrency=sessionStorage.getItem('currency');
    $scope.accType=sessionStorage.getItem('accountType');
    
    var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
        $scope.favLinks=customerInfo.fav_links;
        $scope.topPayee=customerInfo.top_payee;
    
        $scope.defaultData=true; 
    
        var index=sessionStorage.getItem('currentIndex');
        //$scope.transactionInfo=$scope.accountInfo[index];
        $scope.transferHeading="Any Linked ClearBank Account";
        $scope.transferChoice="";
        $scope.bankName="";
        $scope.ifscCode="";
        $scope.payeeData=[];
   
   
    
    $scope.selected1="1";
    $scope.selected2="1";
//    $scope.transfer_type="";
    
    $scope.transferAccount=[]; 
    
    $scope.available_balance="Choose Debit Account First";
    $scope.currency="";
    
    for(i=0;i<$scope.accountInfo.length;i++){
//    if($scope.accountInfo[i].account_type=="Saving")
//        {
//            $scope.debitAccount=$scope.accountInfo[i].account_number;
//            $scope.available_balance=$scope.accountInfo[i].available_balance;
//            $scope.currency=$scope.accountInfo[i].currency;
//            
//            $scope.transferAccount.push({ account_number:$scope.accountInfo[i].account_number,
//                                 account_type:$scope.accountInfo[i].account_type,
//                                 available_balance:$scope.accountInfo[i].available_balance,
//                                 currency:$scope.accountInfo[i].currency});
//        }
//    if($scope.accountInfo[i].account_type=="Current")
//        {
//            $scope.transferAccount.push({ account_number:$scope.accountInfo[i].account_number,
//                                 account_type:$scope.accountInfo[i].account_type,
//                                 available_balance:$scope.accountInfo[i].available_balance,
//                                 currency:$scope.accountInfo[i].currency});
//        }  
        
        
        if($scope.accountInfo[i].account_type=="Current" || $scope.accountInfo[i].account_type=="Saving")
        {
            $scope.transferAccount.push({ account_number:$scope.accountInfo[i].account_number,
                                 account_type:$scope.accountInfo[i].account_type,
                                 available_balance:$scope.accountInfo[i].available_balance,
                                 currency:$scope.accountInfo[i].currency});
        }     
    }
    
    
    $scope.transferMethod=function(){
        
//        if($scope.maxAmount>$scope.available_balance){
//        alert("Can't enter more than available balance");
//        }
       
            
        for(i=0;i<$scope.transferAccount.length;i++)
        {
        if($scope.transferAccount[i].account_number==$scope.debitAccount)
        { $scope.available_balance=$scope.transferAccount[i].available_balance;
             $scope.currency=$scope.transferAccount[i].currency;
        }
        }
    
         if($scope.selected1=="1"){
             $scope.transferChoice="";
             $scope.transfer_type="ownAccount";
             $scope.transferHeading="Your Linked ClearBank Account";
             
             $('.transferMethod').css('display','none');
         }
        
        if($scope.selected1=="2"){
            $scope.transfer_type="sameBank";
            $scope.transferChoice="";
            $scope.transferHeading="Any Other ClearBank Account";
            
           $('.transferMethod').css('display','none');
    }
        
        if( $scope.selected1=="3"){
            $scope.transfer_type="otherBank";
            $scope.transferHeading="Any Other Bank Account through";
            
            if($scope.selected2=="1")
            $scope.transferChoice="NEFT";
         if($scope.selected2=="2")
            $scope.transferChoice="RTGS";
         if($scope.selected2=="3")
            $scope.transferChoice="IMPS";
            
          $('.transferMethod').css('display','block');
    }   
             
     for(i=0;i<$scope.payeeData.length;i++){
     
     if($scope.payeeData[i].payeeAccountNumber==$scope.payeeAccount){
                $scope.bankName=$scope.payeeData[i].bankName;
                $scope.ifscCode=$scope.payeeData[i].ifscCode;
            }
     }   
        
    }
    
    transferService.getPayeedata("1000000008",function(result){
        
        $scope.response=result;
        for(i=0;i<$scope.response.length;i++){
        if(result[i].type=="otherBank"){
        $scope.payeeData=result[i].details;
            console.log($scope.payeeData);
        }       
        }
    });
    
    $scope.checkFields=function(){
     if($scope.debitAccount===undefined || $scope.payeeAccount===undefined || $scope.maxAmount===undefined ||    $scope.maxAmount===null){
            $('.warning_transfer').css('display','block');
        }
        
       else{
            $('.warning_transfer').css('display','none');
        }
        
    }
    
    $scope.transferAmount=function(){
        
        console.log($scope.debitAccount);
        console.log( $scope.payeeAccount);
        console.log($scope.maxAmount);
        
        if($scope.debitAccount===undefined || $scope.payeeAccount===undefined || $scope.maxAmount===undefined ||    $scope.maxAmount===null){
            $('.warning_transfer').css('display','block');
            
        }
        
       else{
            $('.warning_transfer').css('display','none');
              $scope.showAlert();  
       }
     
     
        
    }
    
    $scope.showAlert = function () {
            $mdDialog.show({
                clickOutsideToClose: false,
                controller: function DialogController($scope,$mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  },
                scope:$scope,
                preserveScope: true,
                templateUrl: 'main/partials/transferSuccess.html'
            });
        }
    
    }
    
]);