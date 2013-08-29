function AppWindow2(title) {

	//declare module dependencies
	var Map = require('ui/Map');
	var Buttons = require('lib/Buttons');
	
	//create module instance
	var buttons = new Buttons();
	var mapa = new Map();
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		barColor:'#638F0C'
	});
	
	
	var mapview = Titanium.Map.createView({
		mapType: Titanium.Map.STANDARD_TYPE,
		//region:region,
		animate:true,
		regionFit:true,
		userLocation:true
		//annotations:anotacionesList
	});
	
	var sat = Titanium.UI.createButton({
		title:'Sat'
	});
	// button to change map type to STD
	var std = Titanium.UI.createButton({
		title:'Std'
	});
	//view_buttons.add(std);
	// button to change map type to HYBRID
	var hyb = Titanium.UI.createButton({
		title:'Hyb'
	});
	//view_buttons.add(hyb);
	
	self.rightNavButton = std;
	self.add(mapview);

			var mapupdated = function()
			{
			mapview.region = mapa.getRegion();
			mapview.annotations = mapa.getAnnotations();
			mapview.selectAnnotation(mapa.pin);
			}
		Ti.App.addEventListener('map.updated', mapupdated);
	
	//LISTENERS EVENTS
	sat.addEventListener('click',function() {
		// set map type to satellite
		self.rightNavButton = std;
		mapview.setMapType(Titanium.Map.STANDARD_TYPE);
	});
	
	std.addEventListener('click',function() {
		// set map type to standard
		self.rightNavButton = hyb;
		mapview.setMapType(Titanium.Map.HYBRID_TYPE);
	});
	
	hyb.addEventListener('click',function() {
		// set map type to hybrid
		self.rightNavButton = sat;
		mapview.setMapType(Titanium.Map.SATELLITE_TYPE);
	});
	
	mapview.addEventListener('click',function(evt)
	{
			if (evt.clicksource == 'rightButton')
			{
			var masWin = require('ui/More');
			self.containingTab.open(masWin(evt.annotation.myid, 'win2'));
			}
	});

	Ti.App.addEventListener('ver_mapa_win2',function(gasolinera){
		var mapa = require('ui/Situar');
		self.containingTab.open(mapa(gasolinera));	
	});
	
	return self;
};

module.exports = AppWindow2;
