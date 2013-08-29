function AppTabGroup() {
	//declare module dependencies
	var AppWindow = require('ui/AppWindow');
	var AppWindow2 = require('ui/AppWindow2');
	var AppWindow3 = require('ui/Settings');
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new AppWindow(L('Gasolineras')),
		win2 = new AppWindow2(L('Mapa'));
		win3 = new AppWindow3(L('Ajustes'));
	
	var tab1 = Ti.UI.createTab({
		title: L('Gasolineras'),
		icon: '/images/gas.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('Mapas'),
		icon: '/images/world.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('Ajustes'),
		icon: '/images/preferences.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	//Decidimos que pantalla se abre primero
	//self.setActiveTab(0);
	return self;
};

module.exports = AppTabGroup;
