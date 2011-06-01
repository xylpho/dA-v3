
$(document).ready(function(){
	$(".configure_panel").css('margin-right', '-200px');
	$(".configure").click(function(){
		$(".configure_panel").animate({'margin-right': '0'},500);
	});
	$(".close_configure").click(function(){
		$(".configure_panel").animate({'margin-right': '-200px'},500);
	});
	
	 
});
