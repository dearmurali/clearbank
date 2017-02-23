'use strict';

	clearbank.component('accounts', {

	templateUrl: "main/partials/accounts.html",

	controller: function ($translate) {
		var self = this;

		self.accountInfo = JSON.parse(sessionStorage.getItem('accountInfo'));
		     //     console.log(this.accountInfo);

		self.accNumber = sessionStorage.getItem('accountNumber');
		self.accBalance = sessionStorage.getItem('accountBalance');
		self.accCurrency = sessionStorage.getItem('currency');
		self.accType = sessionStorage.getItem('accountType');

		//console.log(sessionStorage.getItem('currentIndexes'));
		self.getIndex = function (index) {
			sessionStorage.setItem('currentIndex', index);
			sessionStorage.setItem('defaultData', false);



		}
//        $(".accordion").on('click',function(){
//        console.log('xyz')
//        })

     var $accordions = $(".accordion").accordion({
            collapsible: true,
            active: false,
            icons: false
        }).on('click', function() {
            console.log('abc')
            $accordions.not(this).accordion('option','active', 2);
        });


	}

});
