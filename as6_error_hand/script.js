console.log('cylinder');

var $form, altura, radio, volume;

$form = $('#calculator');

$('form input[type="text"]').on('blur', function () {
	console.warn('you entered: ', this.value ); //Error: Warn
	console.assert(this.value >= 0, 'user entered greater than 0'); //1. Console assert
});

$('#calculator').on('submit', function (e) {
	e.preventDefault();
	
	console.log('Clicked submit ...');
	
	altura = $('#height').val();
	console.log('Height: ', altura);
	
	radio = $('#radius').val();
	console.log('Radius: ', radio);
	
	
	try{
		volume = 3.1416*(radio*radio)*altura;
	}
	catch(e){
		console.log("doesn't work, write a number");
	}
		
	if (volume < 10){      //debugger
		debugger	
	};
	console.log(volume);
	console.error(volume);   //Error: show area
	
	//Grouping Messages
	console.group('Volume calculations');
			console.log('Height: ', altura);
			console.log('Radius: ', radio);
			console.log(volume);
	console.groupEnd();
	
	//2.Console assert
	console.assert($.isNumeric(volume), 'User entered non-numeric value');  
	
$form.append('<p>' + volume + '</p>')


});




