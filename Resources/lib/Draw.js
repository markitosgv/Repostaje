function Draw(){

}

Draw.prototype.gasolinerasPintar = function (){
	 	 //hideIndicator();
	 	 var lista = JSON.parse(Titanium.App.Properties.getString("gasolinerasList"));
	 	 var data = [];
	 	 for (var c=0;c<lista.length;c++)
			{
			var id = lista[c].id;
			var rotulo = lista[c].rotulo;
			var distancia = lista[c].distancia;
			var precio = lista[c].precio;
			var fecha = lista[c].fecha;
			var direccion = lista[c].direccion;
			
			var row = Ti.UI.createTableViewRow({hasChild:true,height:39,backgroundColor:'#fff', rowId:c});
			
	 		var post_view = Ti.UI.createView({
					height:'auto',
					layout:'vertical',
					left:5,
					top:5,
					bottom:5,
					right:5
				});
				
				var rotulo = Ti.UI.createLabel({
					text: rotulo,
					left:15,
					top:8,
					height:12,
					width:150,
					textAlign:'left',
					font:{fontSize:14}
				});
				row.add(rotulo);
	 			//post_view.add(rotulo);

				var direccion = Titanium.UI.createLabel({
					text:direccion,
					font:{fontSize:10,fontWeight:'normal'},
					width:150,
					textAlign:'left',
					bottom:4,
					left:15,
					height:12
				});
				row.add(direccion);
				
				var distancia = Titanium.UI.createLabel({
					text:'a '+distancia+' km /',
					font:{fontSize:12,fontWeight:'normal'},
					width:'auto',
					textAlign:'left',
					bottom:10,
					right:60,
					height:14,
					color:'#525751'
				});
				row.add(distancia);
				
				var precio = Titanium.UI.createLabel({
					text:precio+'€',
					font:{fontSize:12,fontWeight:'normal'},
					width:'auto',
					textAlign:'left',
					bottom:10,
					right:20,
					height:14,
					color:'#26870B'
				});
				row.add(precio);
				
				//row.add(post_view);
				row.className = 'item'+c;
				data[c] = row;
				
				}
				return data;
	 	 };

module.exports = Draw;