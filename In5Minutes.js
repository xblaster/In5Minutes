function releasetheKraken() {  
    // The Kraken has been released, master!    
    
	var selectedElement;
	
	var button = $("<button>In 5 minutes</button>");
	button.click(function() {
		setTimeout( function() {
			selectedElement.trigger("click");
		}, 500);
	});
	
	button.append("body");
	button.hide();
	
	
    $("a, button, input[type='submit']").each(function(index, Element) {
		var overlay = $("<a>x</a>");
		//$(this).append(overlay);
		overlay.prependTo($(this));
		//$(this).css("opacity","0.5");
		
		overlay.css("position", "absolute");
		overlay.css("background-color", "rgba(255,9,255,0.3)");
		overlay.css("display", "block");
		overlay.css("z-index", "9999999");
		
		overlay.width($(this).outerWidth(true));
		overlay.height($(this).outerHeight("height"));
		
		overlay.click(function(event) {
			event.stopPropagation();
			selectedElement = overlay;
			button.css("left", overlay.position().left+"px");
			button.css("top", overlay.position().top+"px");;
			button.show();
		});
		
		
	});
}  

releasetheKraken();
