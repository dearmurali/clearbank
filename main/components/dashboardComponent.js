clearbank.component('dashboard',{
  
        templateUrl : "main/partials/dashboard.html",
        bindings:{
            accNumber:'=',
            accBalance:'=',
            accType:'=',
            accCurrency:'='
        },
        transclude:true,
    
        controller:function dashboardController(){
         self=this;
            
        this.accountInfo = JSON.parse(localStorage.getItem('accountInfo'));
        console.log("this.accountInfo");
        console.log(this.accountInfo);
        
        }
  
})

