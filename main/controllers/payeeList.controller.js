clearbank.controller("payeeListController",['$scope','payeeListService',function($scope,payeeListService){
//this.payees={"JOH"};
    var payees=[];
    payeeListService.getPayeeData(function(result){
//console.log(result.payee[0]);
   angular.forEach(result.payee,function(value,key){
   payees.push(value);
   }) 
})
//    console.log(payees);
    this.values=payees;
//    console.log(this.values);
    
    this.deletePayee=function(ndx){
//    console.log(ndx);
       var deletePayees= confirm("Are you sure you want to delete this item");
        
        if(deletePayees===true){
        this.values.splice(ndx,1);
        }
    }
    this.getDetails=function(ndx){
    //console.log(ndx);
    
       sessionStorage.setItem('editAccountNumber',this.values[ndx].AccountNumber);
        sessionStorage.setItem('editName',this.values[ndx].Name);
        
        sessionStorage.setItem('editAccountType',this.values[ndx].AccountType);
        sessionStorage.setItem('editIFSCcode',this.values[ndx].ifscCode);
        sessionStorage.setItem('editNickname',this.values[ndx].NickName)
    }
}])