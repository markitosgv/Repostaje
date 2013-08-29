function Map(){
	this.pin = "";
}

Map.prototype.getAnnotations = function(){
	var gasolinerasList = JSON.parse(Titanium.App.Properties.getString("gasolinerasList"));
	var coordenadas = JSON.parse(Titanium.App.Properties.getString("coordenadas"));
	//declare module dependencies
	var Annotations = require('lib/Annotations');
	var anotaciones = new Annotations();
	
	var anotacionesList = anotaciones.Make();
	this.pin = anotaciones.pin;

return anotacionesList;

};

Map.prototype.getRegion = function(){
	var gasolinerasList = JSON.parse(Titanium.App.Properties.getString("gasolinerasList"));
	var coordenadas = JSON.parse(Titanium.App.Properties.getString("coordenadas"));
	//distancia del elemento mas lejano para centrar el mapa
	var delta = gasolinerasList[gasolinerasList.length - 1].distancia/70;
	var region = {latitude:coordenadas.lat,longitude:coordenadas.lng,animate:true,latitudeDelta:delta, longitudeDelta:delta};


return region;

};

module.exports = Map;
