
$(document).ready(function(){
	var closed = true;
	$(".configure_panel").css('margin-right', '-200px');
	$(".configure").click(function(){
		closed =! closed;
		$(".configure_panel").stop().animate({'margin-right': closed?'-200px':'0'},500);
	});
	$(".close_configure").click(function(){
		$(".configure_panel").animate({'margin-right': '-200px'},500);
	});
	
	 
});
