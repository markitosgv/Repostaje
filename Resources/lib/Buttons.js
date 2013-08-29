function Buttons()
{

}

/*
var trash = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.TRASH
});
trash.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'TRASH'}).show();
});

var reply = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REPLY
});
reply.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'REPLY'}).show();
});

var stop = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.STOP
});
stop.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'STOP'}).show();
});

var play = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.PLAY
});
play.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'PLAY'}).show();
});

var pause = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.PAUSE
});
pause.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'PAUSE'}).show();
});

var fastforward = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.FAST_FORWARD
});
fastforward.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'FAST_FORWARD'}).show();
});

var rewind = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.REWIND
});
rewind.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'REWIND'}).show();
});

var edit = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.EDIT
});
edit.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'EDIT'}).show();
});

var cancel = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.CANCEL
});
cancel.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'CANCEL'}).show();
});

var save = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.SAVE
});
save.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'SAVE'}).show();
});

var organize = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.ORGANIZE
});
organize.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'ORGANIZE'}).show();
});

done.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'DONE'}).show();
});

var disclosure = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.DISCLOSURE
});
disclosure.addEventListener('click', function()
{
	Ti.API.info('FOO');
	Titanium.UI.createAlertDialog({title:'System Button', message:'DISCLOSURE'}).show();
});

var contactadd = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.CONTACT_ADD
});
contactadd.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'CONTACT_ADD'}).show();
});

var nativespinner = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.SPINNER
});
nativespinner.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'SPINNER'}).show();
});

infolight.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'INFO_LIGHT'}).show();
});

var infodark = Titanium.UI.createButton({
	systemButton:Titanium.UI.iPhone.SystemButton.INFO_DARK
});
infodark.addEventListener('click', function()
{
	Titanium.UI.createAlertDialog({title:'System Button', message:'INFO_DARK'}).show();
});
*/
Buttons.prototype.infolight = function() {
	var infolight = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.INFO_LIGHT
	});
	return infolight;
}

Buttons.prototype.refresh = function() {
	var refresh = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.REFRESH
});
return refresh;
}
Buttons.prototype.done = function() {
	var done = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.DONE
	});
	return done;
};
Buttons.prototype.ok = function() {
	var done = Titanium.UI.createButton({
		title:'OK'
	});
	return done;
};
// used to evenly distribute items on the toolbar
Buttons.prototype.flexSpace = function() {
	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	return flexSpace;
};

// used to create a fixed amount of space between two items on the toolbar
Buttons.prototype.fixedSpace = function() {
	var fixedSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FIXED_SPACE,
		width:50
	});
	return fixedSpace;
};

// system buttons
Buttons.prototype.action = function() {
	var action = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.ACTION
	});
	return action;
};

Buttons.prototype.camera = function() {
	var camera = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.CAMERA
	});
	return camera;
};

Buttons.prototype.compose = function() {
	var compose = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.COMPOSE
	});
	return compose;
};

Buttons.prototype.bookmarks = function() {
	var bookmarks = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.BOOKMARKS
	});
	return bookmarks;
};

Buttons.prototype.search = function() {
	var search = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.SEARCH
	});
	return search;
};

//Boton derecho de barra navegacion para mas opciones
Buttons.prototype.add = function() {
	var add = Titanium.UI.createButton({
			systemButton:Titanium.UI.iPhone.SystemButton.ADD
		});
	return add;
};

//Barra de herramientas
Buttons.prototype.toolbar = function() {
	
	var toolbar = Ti.UI.iOS.createToolbar({
			    items:[this.action(),this.flexSpace(),this.compose(),this.fixedSpace(),this.bookmarks(),this.flexSpace(),this.search()],
			    bottom:-44,
			    barColor:'#000'
		});
		
	return toolbar;
};

Buttons.prototype.button = function(title, left, top, activo) {
	
	var button = Titanium.UI.createButton({
		left: left,
		top: top,
	  	width:100,
		height:40,
		title:title,
		color:'#000',
		style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN,
		borderRadius:10,
		font:{fontSize:14},
		backgroundColor: '#8DAD4E',
		borderWidth:0
		//borderColor:'#666'
	  //backgroundImage:'images/buttonselected.png'
	});
	
	if (activo)
	{
		button.borderWidth = 2;
		button.borderColor = '#FFF';
		button.font = {fontWeight:'bold'};	
	}
	return button;
};

module.exports = Buttons;