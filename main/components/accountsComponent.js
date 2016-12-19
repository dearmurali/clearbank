clearbank.component('accounts',{
  
        templateUrl : "main/partials/accounts.html",
        bindings:{
            accNumber:'&',
            accBalance:'&',
            accType:'&',
            accCurrency:'&',
        },
        transclude:true,
    
        require:{
        parent:'^dashboard'
        },
            
        controller:function accountsController(){
        self=this;
             this.accountInfo=JSON.parse(sessionStorage.getItem('accountInfo'));
             console.log("this.accountInfo");
             console.log(this.accountInfo);
             sessionStorage.setItem('defaultData','true');
            
            this.onInit= function(){
            this.getIndex = function (index) {
            sessionStorage.setItem('currentIndex', index);
            sessionStorage.setItem('defaultData','false');
             
            self.accNumber=this.accountInfo[index].accountnumber;
            self.accBalance=this.accountInfo[index].accountbalance;
            self.accType=this.accountInfo[index].accounttype;
            self.accCurrency=this.accountInfo[index].currency;
          }
         }
        }
  
});

