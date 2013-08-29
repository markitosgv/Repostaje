function CurrentPosicion() {

}

CurrentPosicion.prototype.getLocation = function() {
	
			Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
			Ti.Geolocation.purpose = "Tu posicion para encontrar las gasolineras cercanas";
			Titanium.Geolocation.distanceFilter = 10;
			
    		Titanium.Geolocation.getCurrentPosition(function(e)
			{
				if (!e.success || e.error)
				{
					currentLocation.text = 'error: ' + JSON.stringify(e.error);
					Ti.API.info("Code translation: "+translateErrorCode(e.code));
					alert('error ' + JSON.stringify(e.error));
					return;
				}
				var longitude = e.coords.longitude;
				var latitude = e.coords.latitude;
				
				//CAMBIAR COORDENADAS, PRUEBA
				var coordenadas = {
									'lat':latitude,
									'lng':longitude
							};
				Titanium.App.Properties.setString("coordenadas",  JSON.stringify(coordenadas));
				//Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
				Ti.App.fireEvent('location.updated');
				
			});
};

module.exports = CurrentPosicion;