require([
    "dojo/parser",
    "dijit/layout/BorderContainer", 
    "dijit/layout/ContentPane",
    "dijit/layout/AccordionContainer",
    "dijit/form/DropDownButton",
    "dijit/DropDownMenu", 
    "dijit/MenuItem",
    "dijit/Toolbar",
    "dijit/form/Button",
	"esri/map"]);
	
require(["dojo/ready"], function(ready) {
    ready(function(){console.log("Estas usando Dojo Toolkit "+dojo.version.major + "." + dojo.version.minor + "." + dojo.version.patch+" en "+document.URL);
                     createMap();
                     window.onresize = resizeElements();
                    })
});

var map; 
 
function createMap(){
	map = new esri.Map("map",{
	  basemap:"topo",
	  center:[-122.45,37.75], //long, lat
	  zoom:13,
	  sliderStyle:"small"
	});
}

function resizeElements(){
	dijit.registry.byId("bc").resize();
	map.resize();
	map.reposition();
}

function goToMap(){
	dojo.byId("mapContainer").style.display = "block";
	dojo.byId("rightPane").style.display = "none";
	dojo.byId("irMenu").style.display = "block";
	dojo.byId("irMapa").style.display = "none";
	resizeElements();
}

function goToMenu(){
	dojo.byId("mapContainer").style.display = "none";
	dojo.byId("rightPane").style.display = "block";
	dojo.byId("rightPane").style.width = "100%";
	dojo.byId("irMenu").style.display = "none";
	dojo.byId("irMapa").style.display = "block";
	resizeElements();
}
