
$(document).ready(function(){
	var closed = true;
	$(".configure_panel").css('margin-right', '-220px');
	$(".configure").click(function(){
		closed =! closed;
		$(".configure_panel").stop().animate({'margin-right': closed?'-220px':'0'},500);
	});
	$(".close_configure").click(function(){
		$(".configure_panel").animate({'margin-right': '-220px'},500);
	});
	
	var Widgets = {
		settings : {
			columns : '.column',
			widgetSelector : '.db_module',
			handleSelector : '.db_module header',
			contentSelector : '.db_module article',
			widgetDefault : {
				movable: true,
				removable: true,
				collapsible: true,
				editable: true
			},
			widgetIndividual : {
				intro : {
					movable: false,
					removable: false,
					collapsible: false
				}
			}
		},
		init : function() {
			
		}
	};
	
});
