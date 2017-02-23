clearbank.component("topMenu", {

	templateUrl: "main/partials/topMenu.html",
	transclude: true,
	controller: function ($translate) {
//		this.accName = sessionStorage.getItem('customerName');
//		console.log(this.accName);
		this.selectLanguage = function (languageOption) {

			if (languageOption === 1) {
				//console.log(languageOption);
				$(".dropdownButton").html('<span class="flag-icon flag-icon-nl"></span> Dutch  <span class="caret"></span>');
//                console.log($translate.value);
                $translate.use('nl');
			}
			if (languageOption === 2) {
                
				$(".dropdownButton").html('<span class="flag-icon flag-icon-us"></span> United States  <span class="caret"></span>');
                $translate.use('en');
			}
			// $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
		}


	}


});
