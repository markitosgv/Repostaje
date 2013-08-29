function Data(){

		//this.config = JSON.parse(Titanium.App.Properties.getString("config"));
}

Data.prototype.getGasolineras = function(coordenadas) {
	var config = JSON.parse(Titanium.App.Properties.getString("config"));
	var xhr = Titanium.Network.createHTTPClient({
		enableKeepAlive:false
		});
	if(Ti.Network.online){
		xhr.timeout = 15000;
		xhr.onload = function()
		{
			Ti.API.info('XHR "onload" ['+this.status+']: '+this.responseText+'');
			Titanium.API.info('loaded');
			//Si nos responde correctamente con el JSON
			if (this.status == 200)
			{
				var gasolineras = JSON.parse(this.responseText);
				if (gasolineras.error == "Ninguna gasolinera cercana")
				{
					hideIndicator();
					Titanium.API.info('Ninguna gasolinera cercana');
					var alertDialog = Titanium.UI.createAlertDialog({
					    title: 'Aviso',
					    message: 'Ninguna gasolinera cercana a tu posición',
					    buttonNames: ['Reintentar','Ajustes']
					});
					//Mostramos alerta del error y volvemos a pedir las gasolineras si clicka el boton
					alertDialog.show();
					alertDialog.addEventListener('click', function(e){
						//Si ha pulsado reintentar
						if (e.index==0)
						{
						//showIndicator();
			            Ti.App.fireEvent('location.refresh');
			           	}
			            else{
			           	tabGroup.setActiveTab(2);
			           }
			        }); 
				}
				else
				{
					var gasolinerasArray = new Array();
					
						for (var c=0;c<gasolineras.length;c++)
						{
							gasolinerasArray[c] = {
													'id': gasolineras[c].id_gasolinera,
													'lat':gasolineras[c].lat,
													'lng':gasolineras[c].lng,
													'provincia': gasolineras[c].provincia, 
													'localidad': gasolineras[c].localidad,
													'distancia': gasolineras[c].distance,
													'precio': gasolineras[c]['p'+JSON.parse(Titanium.App.Properties.getString("config")).tipoName],
													'fecha':gasolineras[c]['f'+JSON.parse(Titanium.App.Properties.getString("config")).tipoName],
													'direccion':gasolineras[c].direccion,
													'rotulo': gasolineras[c].rotulo,
													'horario': gasolineras[c].horario
											};
							try{
							gasolinerasArray[c].precio = gasolinerasArray[c].precio.replace('.',',');
							}
							catch (e){
							gasolinerasArray[c].precio = "-,--";
							}
						}
					Titanium.App.Properties.setString("gasolinerasList",  JSON.stringify(gasolinerasArray) );
					Ti.App.fireEvent('gasolineras.updated');		
				}
			}
			 
		}
		xhr.onerror = function()
		{
			Titanium.API.info('error');
			Ti.API.info('XHR "onload" ['+this.status+']: '+this.responseText+'');
			var alertDialog = Titanium.UI.createAlertDialog({
			    title: 'Error',
			    message: 'No se ha podido establecer la conexion, comprueba tu conexión',
			    buttonNames: ['Reintentar']
			});
			//Mostramos alerta del error y volvemos a pedir las gasolineras si clicka el boton
			alertDialog.show();
			alertDialog.addEventListener('click', function(e){
	              	Ti.App.fireEvent('location.refresh');
	        }); 
		}
		
		Ti.API.info("http://localhost:10088/Repostaje/api/gasolineras/lat/"+coordenadas.lat+"/lng/"+coordenadas.lng+"/radio/"+config.radio+"/limit/"+config.limit+"/carburante/"+config.tipoName);
		//xhr.open("GET","http://localhost:10088/Repostaje/api/gasolineras/lat/"+42.538059+"/lng/"+-2.556020+"/radio/"+radio+"/limit/"+limit);
		xhr.open("GET","http://repostaje.gesdinet.org/api/gasolineras/lat/"+coordenadas.lat+"/lng/"+coordenadas.lng+"/radio/"+config.radio+"/limit/"+config.limit+"/carburante/"+config.tipoName);
		xhr.send();
	}
	else {
			hideIndicator();
            var alertDialog = Titanium.UI.createAlertDialog({
              title: 'Problemas',
              message: 'No tienes conexión a Internet.',
              buttonNames: ['Ok']
            });
            alertDialog.show();
            tabGroup.setActiveTab(2);
        }
	
};

module.exports = Data;
