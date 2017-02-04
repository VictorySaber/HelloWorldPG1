
jQuery(document).ready(function(){
	
	$('.activation-form input[type="text"], .activation-form input[type="password"]).each(function() {
		$(this).val( $(this).attr('placeholder') );
    });
	
});