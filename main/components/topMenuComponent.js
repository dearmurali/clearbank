clearbank.component("topMenu", {

	templateUrl: "main/partials/topMenu.html",
	transclude: true,
	controller: function () {
		this.accName = sessionStorage.getItem('customerName');
//		console.log(this.accName);
		this.selectLanguage = function (languageOption) {

			if (languageOption === 1) {
				//console.log(languageOption);
				$(".dropdownButton").html('<span class="flag-icon flag-icon-nl"></span> Dutch  <span class="caret"></span>');
			}
			if (languageOption === 2) {
				$(".dropdownButton").html('<span class="flag-icon flag-icon-us"></span> United States  <span class="caret"></span>');
			}
			// $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
		}


	}


});
