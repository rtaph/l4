$(document).ready(function() {	
	$('#quickSubmitButton').bind('click', function() {
		AxcotoLibs.showLoadingIcon('ShortenUrlContainer', 'Waiting...');
		$(this).ajaxSubmit({
			target: '#quick-contact-form'
		});
		return false; // <-- important!
	});		

});
