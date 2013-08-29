function MorePintar(gasolinera){
	
	var data=[];
	var carburante = capitaliseFirstLetter(JSON.parse(Titanium.App.Properties.getString("config")).tipoName);
	data[0] = Ti.UI.createTableViewSection({headerTitle:'Información General'});
	data[1] = Ti.UI.createTableViewSection({headerTitle:carburante});
	
	//Localidad
	
	var label = Titanium.UI.createLabel({text: 'localidad', color:"#4C566C", width:100, left: 10, font:{fontStyle:'italic', size:10}});
	try{
	var labeltext = Titanium.UI.createLabel({text: gasolinera.localidad, left: 80, width: 215});
	}
	catch (e){
	var labeltext = Titanium.UI.createLabel({text: 'No disponible', left: 80, width: 215});
	}
	var row = Ti.UI.createTableViewRow({height: 30});
	row.add(label, labeltext);
	data[0].add(row);
	
	//Provincia
	var label = Titanium.UI.createLabel({text: 'provincia', color:"#4C566C", width:100, left: 10, font:{fontStyle:'italic', size:10}});
	try{
	var labeltext = Titanium.UI.createLabel({text: gasolinera.provincia, left: 80, width: 215});
	}
	catch (e){
	var labeltext = Titanium.UI.createLabel({text: 'No disponible', left: 80, width: 215});
	}
	var row = Ti.UI.createTableViewRow({height: 30});
	row.add(label, labeltext);
	data[0].add(row);

	//Horario
	var label = Titanium.UI.createLabel({text: 'horarios', color:"#4C566C", width:100, left: 10, font:{fontStyle:'italic', size:10}});
	try{
	var labeltext = Titanium.UI.createLabel({text: gasolinera.horario, left: 80, width: 215});
	}
	catch (e){
	var labeltext = Titanium.UI.createLabel({text: 'No disponible', left: 80, width: 215});
	}
	var row = Ti.UI.createTableViewRow({height: 30});
	row.add(label, labeltext);
	data[0].add(row);

	//fecha
	var label = Titanium.UI.createLabel({text: 'fecha actualización', color:"#4C566C", width:140, left: 10, font:{fontStyle:'italic', size:10}});
	try{
	var aux = gasolinera.fecha.split("-");
	var fecha = aux[2]+'/'+aux[1]+'/'+aux[0];
	var labeltext = Titanium.UI.createLabel({text: fecha, left: 140, width: 215});
	}
	catch (e){
	var labeltext = Titanium.UI.createLabel({text: 'No disponible', left: 140, width: 215});
	}
	var row = Ti.UI.createTableViewRow({height: 30});
	row.add(label, labeltext);
	data[1].add(row);

	//precio
	var label = Titanium.UI.createLabel({text: 'precio por litro', color:"#4C566C", width:100, left: 10, font:{fontStyle:'italic', size:10}});
	try{
	var labeltext = Titanium.UI.createLabel({text: gasolinera.precio, left: 110, width: 215});
	}
	catch (e){
	var labeltext = Titanium.UI.createLabel({text: 'No disponible', left: 110, width: 215});
	}
	var row = Ti.UI.createTableViewRow({height: 30});
	row.add(label, labeltext);
	data[1].add(row);
				
	return data;
}

module.exports = MorePintar;
