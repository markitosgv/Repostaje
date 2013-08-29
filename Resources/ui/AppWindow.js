function AppWindow(title) {
	
	//declare module dependencies
	var CurrentPosicion = require('lib/CurrentPosicion');
	var Buttons = require('lib/Buttons');
	var Draw = require('lib/Draw');
	var Data = require('lib/Data');
	Ti.include('lib/functions.js');
	//create module instance
	var position = new CurrentPosicion();
	var buttons = new Buttons();
	var pintar = new Draw();
	var datos = new Data();
	
	//iniciamos los objetos de la UI
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white',
		barColor:'#638F0C'
	});

	var table = Ti.UI.createTableView({
		height:347,
		backgroundColor:'#ffffff',
		selectedBackgroundColor:'#dddddd',
		top:0
	});
				
	var refrescar = buttons.refresh();
	var bb = Titanium.UI.createButtonBar({
		labels:['Km', '€'],
		backgroundColor:'#638F0C'
	});
	
	self.rightNavButton = refrescar;
	self.leftNavButton = bb;
	
	var infobarra = Ti.UI.createView({
		backgroundColor:'#000',
		opacity:0.8,
		width:'100%',
		height:20,
		bottom:0
	});
	
	var labelPosition = Ti.UI.createLabel({
		color:'#FFF',
		font:{fontSize:10},
		textAlign:'center'
	});
	
	bb.addEventListener('click', function(e)
	{
		var gasolinerasList = JSON.parse(Titanium.App.Properties.getString("gasolinerasList"));
		if (e.index==0)//Si pulsamos en KM
		{
		showIndicatorOrder("Más Cercana");
		Titanium.App.Properties.setString("gasolinerasList",  JSON.stringify(gasolinerasList.sort(mySortingKm)));
		}
		else
		{
		showIndicatorOrder("Más Barata");
				Titanium.App.Properties.setString("gasolinerasList",  JSON.stringify(gasolinerasList.sort(mySortingMoney)));
		}
		table.data = pintar.gasolinerasPintar();
		setTimeout(function() {
			    //table.data = aux;
			    hideIndicator();
		}, 750);
	});
	
	refrescar.addEventListener('click', function()
	{
	Ti.App.fireEvent('location.refresh');
	});	
	
	var locationrefresh = function(){
			//limpiamos la tabla para volver a buscar
			table.data = null;
			showIndicator();
			position.getLocation();
	};
	//Global LISTENER si queremos refrescar la posición GPS
	Ti.App.addEventListener('location.refresh', locationrefresh);

	// GLOBAL LISTENER cuando tenemos la posición
	Ti.App.addEventListener('location.updated',function(){
	 	 //alert('lat: '+coordenadas.lat+' lng: '+coordenadas.lng);
	 	 		Ti.API.info("UNA VEZ");
	 	 datos.getGasolineras(JSON.parse(Titanium.App.Properties.getString("coordenadas")));
	 	 //Listener cuando recibamos las gasolineras
	 	 Ti.App.addEventListener('gasolineras.notfound',function(gasolineras){
	 	 hideIndicator();
	 	 });
	 	 
	 	 //Listener cuando recibamos las gasolineras, solo lo hacemos una vez por si nos disaparase mas veces
	 	 var gasolinerasupdated = function(){
	 	 		//Ti.App.fireEvent('gasolineras.pintar');
	 	 		table.data = pintar.gasolinerasPintar();
	 	 		Ti.App.fireEvent('map.updated');
				Ti.App.removeEventListener('gasolineras.updated',gasolinerasupdated);
				hideIndicator();
				labelPosition.text = 'Radio: '+JSON.parse(Titanium.App.Properties.getString("config")).radio+
									 ' km | Carburante: '+JSON.parse(Titanium.App.Properties.getString("config")).tipoName+
									 ' | Limite: '+JSON.parse(Titanium.App.Properties.getString("config")).limit;
			};
	 	 Ti.App.addEventListener('gasolineras.updated', gasolinerasupdated);
			
	});
	
	self.add(table);
	table.addEventListener('click', function(e){
		 var masWin = require('ui/More');
		 self.containingTab.open(masWin(e.rowData.rowId, 'win1'));
	});
	Ti.App.addEventListener('ver_mapa_win1',function(gasolinera){
		var mapa = require('ui/Situar');
		self.containingTab.open(mapa(gasolinera));	
	});
	
	infobarra.add(labelPosition);
	self.add(infobarra);
		
	return self;
};

module.exports = AppWindow;
