var PlacholderJS = {

	// For the following code to work as intended, ensure that the data-content and value attr 
	// of the html input you are working with match

	inputsInit: function() {
			document.getElementById("passwordInput").type = 'text';
			var username = $('#userIdInput');
			var password = $('#passwordInput');
			/* Attach Listeners	*/
			PlacholderJS.inputFocus(username);
			PlacholderJS.inputFocus(password);
			PlacholderJS.inputBlur(username);
			PlacholderJS.inputBlur(password);
	},
	inputFocus: function(element) {
		$(element).focus(function() {
			if (this.value == $(this).data("content")) {
					this.value = '';
				if ($(this).data("content").indexOf("password") != -1) {
					this.type = 'password';
				}
			}
		});
	},
	inputBlur: function(element) {
		$(element).blur(function() {
		if (this.value == '') {
				this.value = $(this).data("content");
				if ($(this).data("content").indexOf("password") != -1) {
					this.type = 'text';
				}
			}
		});
	}

};

window.onload = PlacholderJS.inputsInit;
	
