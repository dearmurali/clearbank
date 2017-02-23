clearbank.controller('footerController',function(){

    this.showFooter=false;
   // console.log(window.location.hash)

    if(window.location.hash=='#!/loginmobile' || window.location.hash=='#!/forgotPasswordMobile' || window.location.hash=='#!/registerMobile')
    {
        console.log(this.showFooter)
        this.showFooter=false;

    }
    else{
        this.showFooter=true;
    }


})
