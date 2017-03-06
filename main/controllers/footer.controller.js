
clearbank.controller('footerController', function () {

	this.showFooter = false;
	if (window.location.hash == '#!/loginmobile' || window.location.hash == '#!/forgotPasswordMobile' || window.location.hash == '#!/registerMobile') {
		console.log(this.showFooter)
		this.showFooter = false;

	} else {
		this.showFooter = true;
	}


})
