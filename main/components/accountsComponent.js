'use strict';

clearbank.component('accounts', {

	templateUrl: "main/partials/accounts.html",

	controller: function ($translate) {
		const self = this;

		self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));


		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

		self.getIndex = function (index) {
			sessionStorage.setItem('currentIndex', index);
			sessionStorage.setItem('defaultData', false);



		}

		let $accordions = $(".accordion").accordion({
			collapsible: true,
			active: false,
			icons: false
		}).on('click', function () {
			$accordions.not(this).accordion('option', 'active', 2);
		});


	}

});
