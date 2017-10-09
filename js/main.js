//slider

$('.slide').slick({
	arrows: false,
	dots: true
});

//tabs

$( function() {
	$( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
});

$('.ui-tabs-vertical .ui-tabs-nav li a').click( function (){
	$('.ui-tabs-vertical .ui-tabs-nav li a:after').css({"display":"none"});
});

//menu

$(document).ready(function(){
	$('.mobile-menu').click(function(){
		$('.menu').slideToggle(1500);
		return false
	});
});