/*
	WEB 303
	Starting file for Assignment 3 
	{Oliver Rodriguez}
*/


var xhr = new XMLHttpRequest();                

xhr.onload = function() {                      
  
  if(xhr.status === 200) {                      
    responseObject = JSON.parse(xhr.responseText);

    
    var equipo = '';
	 for (var i = 0; i < responseObject.teammembers.length; i++) {
	 	
	 	equipo += '<div class="content">';
	 	equipo += '<h3>' + responseObject.teammembers[i].name + '</h3>';
	 	equipo += '<h4>'  + responseObject.teammembers[i].title + '</h4>';
	 	equipo += ''  + responseObject.teammembers[i].bio + '</p>';
	 	equipo += '</div>';
	}
    // Update the page with the new content
    document.getElementById('team').innerHTML = equipo;

  }
};

xhr.open('GET', 'team.json', true);        
xhr.send(null);                                 