$(function(){
	// floatClear: function() {
	// 	        var pass = false,
	// 	            newDiv = doc.createElement('div'),
	// 	            style = 'style="width: 5px; height: 5px; float: left; margin-right: 1px;"';
	// 	        newDiv.style.cssText = 'float: left;';    
	// 	        newDiv.innerHTML = '<div ' + style + '></div><div ' + style + '></div>';
	// 	        body.appendChild(newDiv);
	// 	        var childNodes = newDiv.childNodes,
	// 	            topA = childNodes[0].offsetTop,
	// 	            divB = childNodes[1],
	// 	            topB = divB.offsetTop;
	// 	        if (topA === topB && newDiv.offsetWidth == 12) {
	// 	            divB.style.clear = 'left';
	// 	            topB = divB.offsetTop;
	// 	            if (topA !== topB) {
	// 	                pass = true;
	// 	            }
	// 	        }
	// 	        body.removeChild(newDiv);
	// 	        return pass;
	// 	    }
	// $('table').visualize({type: 'pie', height: '300px', width: '420px'});
	// 	$('table').visualize({type: 'bar', width: '420px'});
	// 	$('table').visualize({type: 'area', width: '420px'});
	// 	$('table').visualize({type: 'line', width: '420px'});
	$('table.dash-datas').visualize({type: 'area'}).trigger('visualizeRefresh');
});