clearbank.component('leftMenu',{
  
        templateUrl : "main/partials/leftMenu.html",
    bindings:{
            accNumber:'<',
            accBalance:'<',
            accCurrency:'<',
            accType:'<'
    },
    require : {
        parent:'^dashboard'
    },
    transclude:true,
    
        controller:function leftMenuController(){
            var self=this;
            self.$onInit=function(){
            this.accountNumber=self.parent.accNumber;
                console.log(parent.accNumber);
            this.accountBalance=self.parent.accBalance;
            this.accountCurrency=self.parent.accCurrency;
            this.accountType=self.parent.accType;    
            }
        
            
        this.accNumber=sessionStorage.getItem('accountNumber');
        this.accBalance=sessionStorage.getItem('accountBalance');    
        this.accType=sessionStorage.getItem('accountType');
        this.accCurrency=sessionStorage.getItem('currency');    
            console.log(this.accNumber);
                console.log(this.accType);
        this.defaultData=sessionStorage.getItem('defaultData');
            console.log(this.defaultData);

        }
  
});

