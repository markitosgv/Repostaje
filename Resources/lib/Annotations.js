function Annotations(){
			this.pin ="";
			this.gasolinerasList = JSON.parse(Titanium.App.Properties.getString("gasolinerasList"));
}
Annotations.prototype.Make = function(){

var gasolinerasArray = this.gasolinerasList;
var aux = gasolinerasArray.sort(mySortingMoney);
var id_barata = aux[0].id;
gasolinerasArray.sort(mySortingKm);
var annotations = [];
this.pin ="";//vaciamos
	for (var c=0;c<gasolinerasArray.length;c++)
		{
			var pin = Titanium.Map.createAnnotation({
				latitude:gasolinerasArray[c].lat,
				longitude:gasolinerasArray[c].lng,
				title:gasolinerasArray[c].rotulo,
				subtitle:gasolinerasArray[c].direccion,
				pincolor: Titanium.Map.ANNOTATION_RED,
				animate:true,
				rightButton: Titanium.UI.iPhone.SystemButton.DISCLOSURE,
				myid: c// CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
			});
			if (gasolinerasArray[c].id == id_barata)
			{
				pin.pincolor = Titanium.Map.ANNOTATION_GREEN;
				this.pin = pin;
			}
			annotations.push(pin);
		}
return annotations;

};

module.exports = Annotations;