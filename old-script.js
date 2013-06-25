$(document).ready(function() {
	
	$('#userIdInput').focus(function() {
		if (this.value == "Enter your user ID.") {
			this.value = "";
		} 
	});
	
	$('#userIdInput').blur(function() {
		if (this.value == "") {
			this.value = "Enter your user ID.";
		}
	});
	
	$('#passwordInput').focus(function() {
		if (this.value == "Enter your password.") {
			this.value = "";
			this.type = "password";
		} 
	});
	
	$('#passwordInput').blur(function() {
		if (this.value == "") {
			this.value = "Enter your password.";
			this.type = "text";
		}
	});
});