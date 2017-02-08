'use strict';
if (sessionStorage.length === 0){
	alert('you need to login to see this page');
	window.location.href = '/';
}

clearbank.component('dashboard', {

	templateUrl: "main/partials/dashboard.html",
	transclude: true,
	controller: function () {
		var self = this;

		self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
		//        console.log("this.accountInfo");
		//        console.log(this.accountInfo);

	}

})
