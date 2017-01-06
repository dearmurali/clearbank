clearbank.component('dashboard', {

	templateUrl: "main/partials/dashboard.html",
	transclude: true,
	controller: function () {
		var self = this;

		this.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
		//        console.log("this.accountInfo");
		//        console.log(this.accountInfo);

	}

})
