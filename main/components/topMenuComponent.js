clearbank.component("topMenu",{
  
        templateUrl : "main/partials/topMenu.html",
        controller:function topMenuController(){    
        
        this.accName = localStorage.getItem('customerName');
            console.log(this.accName);
       
        }
  
});