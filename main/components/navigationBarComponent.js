clearbank.component("navigationBar",{
        templateUrl : "main/partials/navigationBar.html",
        controller:function navigationBarController() {
        this.accName = localStorage.getItem('customerName');
            console.log(this.accName);
        }
 });
    
    
