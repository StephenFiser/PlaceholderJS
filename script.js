var PlacholderJS = {

	// For the following code to work as intended, ensure that the data-content and value attr 
	// of the html input you are working with match

	inputsInit: function() {
			$('.noJS').hide();
			if (!jQuery) {
				$('.noJS').show();
				return;
			}

			document.getElementById("passwordInput").type = 'text';

			var username = $('#userIdInput'), password = $('#passwordInput'), passText = "password";
			username.blur();
			/* Attach Listeners	*/
			PlacholderJS.inputFocus(username, passText);
			PlacholderJS.inputFocus(password, passText);
			PlacholderJS.inputBlur(username, passText);
			PlacholderJS.inputBlur(password, passText);
	},
	inputFocus: function(element, testText) {
		$(element).focus(function() {
			if (this.value == $(this).data("content")) {
					this.value = '';
				if ($(this).data("content").indexOf(testText) != -1) {
					this.type = 'password';
				}
			}
		});
	},
	inputBlur: function(element, testText) {
		$(element).blur(function() {
		if (this.value == '') {
				this.value = $(this).data("content");
				if ($(this).data("content").indexOf(testText) != -1) {
					this.type = 'text';
				}
			}
		});
	}

};

$(function() {
	PlacholderJS.inputsInit();
});
	
