$(document).ready(function() {
	
	var passtext = "password";
	document.getElementById("passwordInput").type = 'text';

	// For the following code to work as intended, ensure that the name and value attr of the html input you are working with match

	function inputFocus(element) {
		$(element).focus(function() {
			if (this.value == this.name) {
					this.value = '';
				if (this.name.indexOf(passtext) != -1) {
					this.type = 'password';
				}
			}
		});
	}

	function inputBlur(element) {
		$(element).blur(function() {
		if (this.value == '') {
				this.value = this.name;
				if (this.name.indexOf(passtext) != -1) {
					this.type = 'text';
				}
			}
		});
	}



	var username = $('#userIdInput');
	var password = $('#passwordInput');

	/* Attach Listeners	*/
	inputFocus(username);
	inputFocus(password);
	inputBlur(username);
	inputBlur(password);

});