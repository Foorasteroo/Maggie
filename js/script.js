$(document).ready(function(){
	//google code prettyfier
    //prettyPrint();
    
    //ascensor
	$('#main').ascensor({
		AscensorName:'magia',
		WindowsFocus:true,
		WindowsOn:2,
		
		NavigationDirection:'xy',
		Direction: 'y',
		Navig:false, //mapa
		Link:false, //un estupido link por pagina
		ReturnURL:true,
		PrevNext:false, //botones de navegacion
		CSSstyles:true, //css por defecto
		
		KeyArrow:true,
		keySwitch:true,
		ReturnCode:false,
		
		ChocolateAscensor:true,
		AscensorMap: '5|1',
		ContentCoord: '1|1 & 1|2 & 1|3 & 1|4 & 1|5'
	});

	//float
	$('.butterfly').jqFloat({
    	width: 300,
    	height: 300,
    	speed: 5000
	});




// el final absoluto xD
});