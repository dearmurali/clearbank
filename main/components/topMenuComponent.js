clearbank.component("topMenu",{
  
        templateUrl : "main/partials/topMenu.html",
        controller:function topMenuController(){    
        
        this.accName = sessionStorage.getItem('customerName');
            console.log(this.accName);
       
        }
  
});