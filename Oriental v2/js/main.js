$(document).ready(function(){

navContainer();
byScroll();


});



var navContainer = function () {



	var 	$toggleButton = $('#navMenu');
			$navContainer = $('#navMenu_container');
			$menuButton = $('#m_nav_menu')
			$menuButtonBars = $('.navHamMenu');
			$wrapper = $('#wrapper');

	// toggle the container on click of button (can be remapped to $menuButton)

	$toggleButton.on("click", function(){

		// declare a local variable for the window width
		var $viewportWidth = $(window).width();

		// if statement to determine whether the nav container is already toggled or not

		if($navContainer.is(':hidden'))
		{	
			$wrapper.removeClass('closed_wrapper');
			$wrapper.addClass("open_wrapper");
			$navContainer.slideDown(200).addClass('container_open').css("z-index", "2");
			// $(window).scrollTop(0);
			$menuButtonBars.removeClass('button_closed');
			$menuButtonBars.addClass('button_open');
			$("#navHamMenu_1").addClass("navHamMenu_1_open");
			$("#navHamMenu_2").addClass("navHamMenu_2_open");
			$("#navHamMenu_3").addClass("navHamMenu_3_open");

		}
		else
		{
			$navContainer.css("z-index", "0").removeClass('container_open').slideUp(200)
			$menuButtonBars.removeClass('button_open')
			$menuButtonBars.addClass('button_closed')
			$wrapper.removeClass('open_wrapper')
			$wrapper.addClass("closed_wrapper")
			$("#navHamMenu_1").removeClass("navHamMenu_1_open");
			$("#navHamMenu_2").removeClass("navHamMenu_2_open");
			$("#navHamMenu_3").removeClass("navHamMenu_3_open");

		}
	});



}


// Function that takes the href value of links in the navbar and then scrolls 
//the div on the page whose ID matches said value. This only works if you use 
//a consistent naming scheme for the navbar anchors and div IDs







