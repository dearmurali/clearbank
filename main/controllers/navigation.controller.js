clearbank.controller('navigationController',function(){

    this.showNavbar=true;

    this.showLogout=false;
    console.log(window.location.hash)
    if(window.location.hash=='#!/loginmobile' || window.location.hash=='#!/forgotPasswordMobile' || window.location.hash=='#!/registerMobile')
    {
       this.showNavbar=false;

    }
    if(window.location.hash==='#!/')
    {    this.showLogin=true;
//        this.showLogin=false;
//        this.showLogout=true;
    }
    else{
        this.showLogin=false;
        this.showLogout=true;
    }

    if(window.location.href.includes('Admin')){
			self.adminNav=true;
		}
    this.goToLogin=function(){

        this.showNavbar=false;
        window.location.href="#!/loginmobile"
        location.reload();

    }

    this.logoutMobile=function(){
        sessionStorage.clear();
        window.location.href=""

    }


})
