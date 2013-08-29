function Situar(gasolinera) {

	//declare module dependencies
	var Buttons = require('lib/Buttons');
	
	//create module instance
	var buttons = new Buttons();
	
	var self = Ti.UI.createWindow({
		title:gasolinera.rotulo,
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

	var pin = Titanium.Map.createAnnotation({
				latitude:gasolinera.lat,
				longitude:gasolinera.lng,
				title:gasolinera.rotulo,
				subtitle:gasolinera.direccion,
				pincolor: Titanium.Map.ANNOTATION_GREEN,
				animate:true
	});
	
	var delta = 0.0008;
	var region = {latitude:gasolinera.lat,longitude:gasolinera.lng,animate:true,latitudeDelta:delta, longitudeDelta:delta};
	
	mapview.addAnnotation(pin);
	mapview.setRegion(region);
	mapview.selectAnnotation(pin);
	
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
	return self;
};

module.exports = Situar;
