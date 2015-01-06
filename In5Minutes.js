
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">
	<localRepository>d:/rnet_dev/m2-repo</localRepository>
	<proxies>
	<proxy>
	<active>true</active>
	<protocol>http</protocol>
	<host>192.168.60.23</host>
	<port>8080</port>
 	<username>ext00029</username> 
 	<password>Toto7890</password> 
	<nonProxyHosts>www.google.com|*.somewhere.com</nonProxyHosts>
	</proxy>
	</proxies>

<!-- 	<mirrors> -->
<!-- 		<mirror> -->
<!-- 			This sends everything else to /public -->
<!-- 			<id>nexus</id> -->
<!-- 			<mirrorOf>*</mirrorOf> -->
<!-- 			<url>http://rnetdev/nexus/content/groups/public</url> -->
<!-- 		</mirror> -->
<!-- 	</mirrors> -->
<!-- 	<profiles> -->
<!-- 		<profile> -->
<!-- 			<id>nexus</id> -->
<!-- 		</profile> -->
<!-- 	</profiles> -->
<!-- 	<activeProfiles> -->
<!-- 		<activeProfile>nexus</activeProfile> -->
<!-- 	</activeProfiles> -->
</settings>




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
