
clearbank.component("topMenu", {

	templateUrl: "main/partials/topMenu.html",
	transclude: true,
	controller: function ($translate) {
		this.selectLanguage = function (languageOption) {

			if (languageOption === 1) {

				$(".dropdownButton").html('<span class="flag-icon flag-icon-nl"></span> Dutch  <span class="caret"></span>');

				$translate.use('nl');
			}
			if (languageOption === 2) {

				$(".dropdownButton").html('<span class="flag-icon flag-icon-us"></span> United States  <span class="caret"></span>');
				$translate.use('en');
			}

		}


	}


});
