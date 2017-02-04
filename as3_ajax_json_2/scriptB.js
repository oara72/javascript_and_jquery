$('#teammembers').append('<div id="team"></div>');

function loadTeam() {
  $.getJSON('team.json').done( function(data){                         
    
			var msg = '<h2>team</h2>';        
	
    $.each(data, function(key, val) {                   
			msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
			});
  }); 
}

loadTeam();                                              