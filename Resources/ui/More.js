function More(id,win) {
	
	//declare module dependencies
	var Buttons = require('lib/Buttons');
	var module	= require('de.marcelpociot.twitter');
	//create module instance
	var buttons = new Buttons();

	var self = Ti.UI.createWindow({
		title:'Detalle',
		backgroundImage:'images/bg.png',
		backgroundRepeat:true,
		barColor:'#638F0C'
		});
	
	var gasolinerasList = JSON.parse(Titanium.App.Properties.getString("gasolinerasList"));
	var gasolinera = gasolinerasList[id];
	self.title = gasolinera.rotulo;
	
	var tweet = Ti.UI.createButton({
		title: 'Twittea',
		left: 180,
		top: 260,
	  	width:100,
		height:40
	});
	
	var ver_mapa = Ti.UI.createButton({
		title: 'Situar',
		left: 40,
		top: 260,
	  	width:100,
		height:40
	});
	
	var ruta = Titanium.UI.createButton({
		title:'Ruta'
	});
	self.rightNavButton = ruta;
	
	var label = Ti.UI.createLabel({
		text:gasolinera.direccion
	});
	//self.add(label);
	//http://maps.google.es/maps?saddr=42.538059+-2.556020&daddr=soria

	// create table view
	var tableview = Titanium.UI.createTableView({
		style: Titanium.UI.iPhone.TableViewStyle.GROUPED,
		backgroundImage:'images/bg.png',
		backgroundRepeat:true,
		touchEnabled:false
	});
	var morePintar = require('lib/MorePintar');
	tableview.data = morePintar(gasolinera);
	
	self.add(tableview);
	self.add(tweet);
	self.add(ver_mapa);
	
	ver_mapa.addEventListener('click', function(){
		if (win == 'win1')
		Ti.App.fireEvent('ver_mapa_win1',gasolinera);
		if (win == 'win2')
		Ti.App.fireEvent('ver_mapa_win2',gasolinera);
	});
	/*tweet.addEventListener('click', function(){
		
	module.tweet({
			message: 	'El precio más barato de '+capitaliseFirstLetter(JSON.parse(Titanium.App.Properties.getString("config")).tipoName)+' en '+gasolinera.rotulo+' a '+gasolinera.precio+' €/L'+'. Gracias a Repostaje para iPhone.',
			urls: 		['http://maps.google.es/maps?q='+gasolinera.lat+','+gasolinera.lng],
			//images:		['http://www.marcelpociot.de/logo.png'],
			cancel:		function(){
				//alert("Tweet cancelado");
			},
			success:		function(){
				//alert("Tweet enviado");
			},
			error:		function(){
				alert("No se ha podido enviar el tweet");
			}
		});
		
	});*/
	ruta.addEventListener('click', function()
	{
	Titanium.Platform.openURL('http://maps.google.es/maps?saddr='+JSON.parse(Titanium.App.Properties.getString("coordenadas")).lat+'+'+JSON.parse(Titanium.App.Properties.getString("coordenadas")).lng+'&daddr='+gasolinera.lat+'+'+gasolinera.lng);
	});	
	
	return self;
};

module.exports = More;