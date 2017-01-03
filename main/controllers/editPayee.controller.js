clearbank.controller("editPayeeController",function($scope,$mdDialog){
console.log(sessionStorage.getItem('editAccountType'));
    console.log(sessionStorage.getItem('editAccountType'));
    this.accountNumber=sessionStorage.getItem('editAccountNumber');
    this.reEnterAccountNumber=sessionStorage.getItem('editAccountNumber');
    this.accountType=sessionStorage.getItem('editAccountType');
    this.ifscCode=sessionStorage.getItem('editIFSCcode');
    this.payeeName=sessionStorage.getItem('editName');
    this.payeeNickName=sessionStorage.getItem('editNickname');
    this.setLimit=true;
    this.checkLimit=function(option){
    //console.log(option);
        if(option==="yes"){
        this.setLimit=false;
        }
        else
            this.setLimit=true;
    }
    this.savePayee=function(){
    if(this.payeeNickName===undefined || (this.setLimit===false && this.transferLimit===undefined))
    {
    this.emptyFields=true;
    }
        else{
             this.emptyFields=false;
            this.showModal();
        console.log("Saving")
        }
    }
    
    this.showModal=function(){
    $mdDialog.show({
    controller:modalController,
        templateUrl:'views/modifyPayeeSuccessModal.html',
           clickOutsideToClose:false
    })
    }
    function modalController($scope, $mdDialog) {
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    }
})
