function About() {
	
	//declare module dependencies
	var Buttons = require('lib/Buttons');
	//create module instance
	var buttons = new Buttons();
	
	var self = Ti.UI.createWindow({
		title:'Sobre Nosotros',
		backgroundImage:'images/bg.png',
		backgroundRepeat:true,
		modal:true, 
    	modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN,
		tabBarHidden:true,
		barColor:'#638F0C'
		});
	
		//Boton de OK
	var donebutton = buttons.ok();
	self.rightNavButton = donebutton;
	
	donebutton.addEventListener('click',function(){
		Ti.App.fireEvent('info');
		self.close();
	});
	return self;
	
};

module.exports = About;

