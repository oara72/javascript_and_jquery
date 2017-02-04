/*
	WEB 303
	Starting file for Assignment 1 
	{Oliver Rodriguez}
*/

$(function(){

	 $("#salary, #percent").keyup(function(){
        var sal= $('#salary').val();
        var perc= $('#percent').val();
	
        
    var cal= Math.round((sal * perc) / 100);
    
	$('#spend').text('$' + cal);
        
    });
});