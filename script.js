var PlacholderJS = {

	/* For the following code to work as intended, ensure that the data-content and value attr 
	of the html input you are working with match */

	inputsInit: function() {
			$('.noJS').hide();
			if (!jQuery) {
				$('.noJS').show();
				return;
			}

			


			var username = $('#userIdInput'), passIn = $('#passwordInput'), passText = "password", passHold = $('#passwordHolder');
			username.blur(); // need this since different browsers focus on first element differently
			passIn.hide();
			// Attach Listeners	
			PlacholderJS.inputFocus(username, passText);
			PlacholderJS.inputBlur(username, passText);
			PlacholderJS.inputFocus(passHold, passText);
			PlacholderJS.inputBlur(passIn, passText);
	},
	inputFocus: function(element, testText) {
		$(element).focus(function() {
			if (this.value == $(this).data("content")) {
					this.value = '';
				if ($(this).data("content").indexOf(testText) != -1) {
					$(this).hide();
					$('#passwordInput')[0].value = '';
					$('#passwordInput').show().focus();
				}
			}
		});
	},
	inputBlur: function(element, testText) {
		$(element).blur(function() {
		if (this.value == '') {
				this.value = $(this).data("content");
				if ($(this).data("content").indexOf(testText) != -1) {
					$(this).hide();
					$('#passwordHolder').show();
					$('#passwordHolder')[0].value = $('#passwordHolder').data("content");
				}
			}
		});
	}

};

$(function() {
	PlacholderJS.inputsInit();
});
	
