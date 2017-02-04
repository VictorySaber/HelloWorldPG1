
jQuery(document).ready(function() {
	
    /*
        Form
    */
    $('.activation-form fieldset:first-child').fadeIn('slow');
    
    $('.activation-form input[type="text"], .activation-form input[type="password"], .activation-form input[type="email"], .activation-form input[type="tel"], .activation-form input[type="date"], .activation-form select').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.activation-form .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	
    	parent_fieldset.find('input[type="text"], input[type="password"], input[type="date"], input[type="email"], input[type="tel"],  select').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
	    		$(this).next().fadeIn();
	    	});
    	}
    	
    });
    
    // previous step
    $('.activation-form .btn-previous').on('click', function() {
    	$(this).parents('fieldset').fadeOut(400, function() {
    		$(this).prev().fadeIn();
    	});
    });
    
    // submit
    $('.activation-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], input[type="date"], input[type="email"], input[type="tel"], select').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
