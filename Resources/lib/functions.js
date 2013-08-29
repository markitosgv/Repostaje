var indWin = null;
var actInd = null;

function showIndicator()
{
	if( Titanium.Platform.osname == 'iphone' ){
	    // window container
	    indWin = Titanium.UI.createWindow({
	        height:'100%',
	        width:'100%'
	    });

	    // black view
	    var indView = Titanium.UI.createView({
	        height:120,
	        width:120,
	        backgroundColor:'#000',
	        borderRadius:10,
	        opacity:0.8
	    });
	    indWin.add(indView);

	    // loading indicator
	    actInd = Titanium.UI.createActivityIndicator({
	        style:Titanium.UI.iPhone.ActivityIndicatorStyle.BIG,
	        height:30,
	        width:30,
	        top:200
	    });
	    indWin.add(actInd);

	    // message
	    var message = Titanium.UI.createLabel({
	        text:"Localizando",
	        color:'#fff',
	        width:'auto',
	        height:'auto',
	        font:{fontSize:18,fontWeight:'bold'},
	        bottom:180
	    });
	    indWin.add(message);
	    indWin.open();
	    actInd.show();

	// android
	}else{
		actInd = Titanium.UI.createActivityIndicator({
				message:"Cargando"
			});
		actInd.show();
	}

};

function hideIndicator()
{
	actInd.hide();

	if( Titanium.Platform.osname == 'iphone' ){
	    indWin.close();
	}
};

function showIndicatorOrder(orden)
{
	if( Titanium.Platform.osname == 'iphone' ){
	    // window container
	    indWin = Titanium.UI.createWindow({
	        height:'100%',
	        width:'100%'
	    });

	    // black view
	    var indView = Titanium.UI.createView({
	        height:120,
	        width:120,
	        backgroundColor:'#000',
	        borderRadius:10,
	        opacity:0.8
	    });
	    indWin.add(indView);

	    // message
	    var message = Titanium.UI.createLabel({
	        text:orden,
	        textAlign:"center",
	        color:'#fff',
	        width:100,
	        height:'auto',
	        font:{fontSize:24,fontWeight:'bold'},
	        bottom:200
	    });
	    indWin.add(message);
	    indWin.open();

	// android
	}else{
		actInd = Titanium.UI.createActivityIndicator({
				message:orden
			});
	}

};
/**
 * A custom sorting function that ends with: return a == b ? 0 : (a < b ? -1 : 1) is ascending (Asc)
 * A custom sorting function that ends with: return a == b ? 0 : (a < b ? 1 : -1) is descending (Desc)
 * @param a
 * @param b
 * @param order ASC or DESC
 */
function mySortingKm(a,b) {
	a = a['distancia'];
	b = b['distancia'];
	
	return a == b ? 0 : (a < b ? -1 : 1)

};

function mySortingMoney(a,b) {
	a = a['precio'];
	b = b['precio'];
	
	return a == b ? 0 : (a < b ? -1 : 1)

};

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
};