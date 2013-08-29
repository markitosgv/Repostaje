function SettingsIni(title) {
	
	//declare module dependencies
	var Buttons = require('lib/Buttons');
	var Data = require('lib/Data');
	//create module instance
	var buttons = new Buttons();
	var datos = new Data();
	
	var tipoName ="gasolina95";
	var tipo = 1;
	
	var self = Ti.UI.createWindow({
		title:title,
		backgroundImage:'images/bg.png',
		backgroundRepeat:true,
		tabBarHidden:true,
		barColor:'#638F0C'
	});
	
	var tabGroup = Titanium.UI.createTabGroup();

	//Create a single tab
	var tab = Titanium.UI.createTab({
	     window:self
	});
	
	tabGroup.addTab(tab);
	
	//Boton de OK
	var donebutton = buttons.ok();
	self.rightNavButton = donebutton;

	var limitLabel = Titanium.UI.createLabel({
		text:'Limite de gasolineras = '+JSON.parse(Titanium.App.Properties.getString("config")).limit ,
		color:'#000',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:15
		},
		textAlign:'center',
		top:30,
		width:300,
		height:'auto'
	});
	
	var radioLabel = Titanium.UI.createLabel({
		text:'Radio de búsqueda (en Km) = '+JSON.parse(Titanium.App.Properties.getString("config")).radio ,
		color:'#000',
		font:{
			fontFamily:'Helvetica Neue',
			fontSize:15
		},
		textAlign:'center',
		top:90,
		width:300,
		height:'auto'
	});
	
	var limitSlider = Titanium.UI.createSlider({
		min:1,
		max:30,
		value:JSON.parse(Titanium.App.Properties.getString("config")).limit,
		width:200,
		height:'auto',
		top:50,
		leftTrackImage:'images/slider_greenbar.png'	
	});

	var radioSlider = Titanium.UI.createSlider({
		min:0,
		max:50,
		value:JSON.parse(Titanium.App.Properties.getString("config")).radio,
		width:200,
		height:'auto',
		top:110,
		leftTrackImage:'images/slider_greenbar.png'
	});
	
	limitSlider.addEventListener('change',function(e)
	{
		limitLabel.text = 'Limite de gasolineras = ' + Math.round(limitSlider.value);
	});
	radioSlider.addEventListener('change',function(e)
	{
		radioLabel.text = 'Radio de búsqueda (en Km) = ' + Math.round(radioSlider.value);
	});
	
	self.add(limitLabel);
	self.add(limitSlider);
	self.add(radioLabel);
	self.add(radioSlider);
	
	//botones de seleccion de carburante
	var button1 = buttons.button("Gasolina 95", 40, 160,"activo");
	var button2 = buttons.button("Gasolina 98", 180, 160);
	var button3 = buttons.button("Gasoleo A", 40, 240);
	var button4 = buttons.button("Gasoleo B", 180, 240);
	var button5 = buttons.button("Gasoleo C", 40, 320);
	var button6 = buttons.button("Biodiesel", 180, 320);
	
	self.add(button1);
	self.add(button2);
	self.add(button3);
	self.add(button4);
	self.add(button5);
	self.add(button6);
	
	button1.addEventListener('click',function()
	{
		buttonOn(button1);
		tipoName = "gasolina95";
		tipo = 1;
		var buttons = [button2,button3,button4,button5,button6];
		buttonOff(buttons);
	});
	
	button2.addEventListener('click',function()
	{
		buttonOn(button2);
		tipoName = "gasolina98";
		tipo = 2;
		var buttons = [button1,button3,button4,button5,button6];
		buttonOff(buttons);
	});
	
	button3.addEventListener('click',function()
	{
		buttonOn(button3);
		tipoName = "gasoleoA";
		tipo = 3;
		var buttons = [button1,button2,button4,button5,button6];
		buttonOff(buttons);
	});
	
	button4.addEventListener('click',function()
	{
		buttonOn(button4);
		tipoName = "gasoleoB";
		tipo = 4;
		var buttons = [button1,button2,button3,button5,button6];
		buttonOff(buttons);
	});
	
	button5.addEventListener('click',function()
	{
		buttonOn(button5);
		tipoName = "gasoleoC";
		tipo = 5;
		var buttons = [button1,button2,button3,button4,button6];
		buttonOff(buttons);
	});
	
	button6.addEventListener('click',function()
	{
		buttonOn(button6);
		tipoName = "biodiesel";
		tipo = 6;
		var buttons = [button1,button2,button3,button4,button5];
		buttonOff(buttons);
	});
	
	function buttonOn(button)
	{
			button.borderWidth = 2;
			button.borderColor = '#FFF';
			button.font = {fontWeight:'bold'};				
	}
	
	function buttonOff(buttons)
	{
			for (var c=0; c<buttons.length ;c++)
			{
			buttons[c].borderWidth = 0;
			buttons[c].font = {fontWeight:'normal'};
			}			
	}
	
	donebutton.addEventListener('click', function()
	{
		var config = {
					'radio': Math.round(radioSlider.value),
					'limit': Math.round(limitSlider.value),
					'tipo':tipo,
					'tipoName': tipoName
		};
		Titanium.App.Properties.setString("config",  JSON.stringify(config));
		tabGroup.close();
		Ti.App.fireEvent('location.start');
	});

	return tabGroup;
};

module.exports = SettingsIni;
