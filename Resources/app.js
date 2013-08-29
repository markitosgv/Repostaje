/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
	
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
else if (Ti.Platform.osname === 'mobileweb') {
	alert('Mobile web is not yet supported by this template');
}
else {

	var SettingsTab = require('ui/SettingsIni');
	var AppTabGroup = require('ui/AppTabGroup');
	//referencias
		//config inicial
	var config = {
			'radio': 5,
			'limit': 15,
			'tipo':'1',
			'tipoName': 'gasolina95'
		};
	Titanium.App.Properties.setString("config",  JSON.stringify(config));
	
	var SettingsIni = new SettingsTab(L('Ajustes de Inicio'));
	SettingsIni.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN});
	var tabGroup = new AppTabGroup();
	//Cuando queramos localizar y tengamos las settings definidas
	Ti.App.addEventListener('location.start',function(){
	//Ventana de preferencias si iniciamos el programa
	tabGroup.open();
	Ti.App.fireEvent('location.refresh');
	//showIndicator();
	//position.getLocation();
	});
}