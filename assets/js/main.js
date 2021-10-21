

$(document).ready(function(){


	/* Toggle the nav-menu icon */
	const navBar = $(".js-custom-navbar");
	const menuIcon = $(".js-menu-icon");
	const menuIconClose = $(".js-menu-icon span");

	menuIcon.on('click' , function(e){
		e.preventDefault();
		navBar.toggleClass("open");
	let toggle =  menuIconClose.toggleClass("fa-times");

	if(toggle.hasClass("fa-times")){
		toggle.removeClass("fa-bars");
	}else{
		toggle.addClass("fa-bars");
	}
	});



	




});