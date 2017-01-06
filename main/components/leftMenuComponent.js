clearbank.component('leftMenu',{
  
        templateUrl : "main/partials/leftMenu.html",
        controller:function leftMenuController(){
            var self=this;
            
        self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
        console.log(self.accountInfo);
        var customerInfo = JSON.parse(sessionStorage.getItem('customerInfo'));
        self.favLinks = customerInfo.fav_links;
        self.topPayee = customerInfo.top_payee;
        self.accNumber = sessionStorage.getItem('accountNumber');
        self.accBalance = sessionStorage.getItem('accountBalance');
        self.accCurrency = sessionStorage.getItem('currency');
        self.accType = sessionStorage.getItem('accountType');

        self.defaultData = true;

        self.getIndex = function (index) {
            console.log("index");
            sessionStorage.setItem('currentIndex', index);
            self.defaultData = false;
             console.log(index);
        }

        var index = sessionStorage.getItem('currentIndex');
        self.transactionInfo = self.accountInfo[index];
      console.log( self.transactionInfo);
        }
  
});

