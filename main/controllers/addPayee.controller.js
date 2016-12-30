clearbank.controller('addPayeeController', ['$scope','$mdDialog', function ($scope,$mdDialog) {
this.accountType="";
    this.accountTypes=[{type:"Savings"},{type:"Current"}];
    this.setLimit=true;
    this.compareAccountNumber=function(){
    if(this.accountNumber!=this.reEnterAccountNumber)
    {

        this.accountMatchFail=true;
    }
        else
        {
        this.accountMatchFail=false;
        }
    }
    
    // when save button is clicked//
    
    this.savePayee=function(){
console.log(this.payeeName);
        if( this.accountNumber===undefined || this.reEnterAccountNumber===undefined || this.accountType===undefined || this.ifscCode===undefined || this.payeeName===undefined || this.payeeNickName===undefined)
        {this.emptyFields=true;
          this.emptyFields=true;
        console.log("found")
        }
        console.log(this.accountNumber);
         if(this.setLimitOption==="yes"){
                console.log(this.transferLimit);
            if(this.transferLimit===undefined){
                this.emptyFields=true;
            }
            }
       if(this.accountNumber!=undefined && this.reEnterAccountNumber!=undefined && this.accountType!=undefined && this.ifscCode!=undefined && this.payeeName!=undefined && this.payeeNickName!=undefined && (this.accountNumber===this.reEnterAccountNumber))
       {      
           if(this.setLimitOption==="yes" && this.transferLimit!=undefined)
           {
                this.emptyFields=false;
               console.log(this.transferLimit);
               console.log("Calling service with limit value");
                 this.showModal();
               }
                 
             //service call with limit
           
           
           if(this.setLimitOption==="no" || this.setLimitOption===undefined)
           {
               this.emptyFields=false;
           console.log("Calling service without limit");
               this.showModal();
           }
       }}
       
       this.checkLimit=function(option){
           console.log(option);
    if(option==="yes")
           {
           this.setLimit=false;
           }
           else{
           this.setLimit=true;
           }
       }
       this.showModal=function()
       {
       $mdDialog.show({
//       controller:addPayeeController,
           templateUrl:'views/addPayeeSuccessModal.html',
           clickOutsideToClose:false
       })
       }
}])