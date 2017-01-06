	$(document).ready(function(){	
		/* hide elements on poage load */
		$('.client p, .client hr, .discover').css({"opacity":"0"});
		/* reposition logo */
		$('.logo').css({"margin-top":"200px"});
		
		/* animate on mouseover */
		$('.portfolio').css('cursor','pointer').mouseover(function(){	
			$(this).find('.logo').animate({"margin-top":"60px"});
			$(this).find('p, hr, .discover').animate({opacity:1.0});
		});	
		/* animate on mouseout */
		$('.portfolio').css('cursor','pointer').mouseout(function(){		
			$(this).find('.logo').animate({"margin-top":"200px"});
			$(this).find('.client p, .client hr, .discover').animate({opacity:0.0});		
		});				
	});
	