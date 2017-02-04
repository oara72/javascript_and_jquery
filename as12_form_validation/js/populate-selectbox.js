(function(){
	var formrd=document.getElementById('register');
	var optionsrd=formrd.elements.heard;
	var topicsl=document.getElementById('how_much');
	var interesting={
		ultrai:'all is new for me',
		veryi:'Very Interesting',
		somewhati:'Somewhat Interesting'
	};
	var cool={
		dudec:'DUDE!',
		veryc:'Very Cool',
		somewhatc:'Somewhat Cool'
	};
	var easy={
		reallye:'Really? So simple',
		babye:'A baby could do it',
		preschoole:'Preescholer level'
	};
	var noreason={
		huhn:'I dont have any reason',
		waitn:'You have any Idea',
		whatn:'What?'
	};
	
	addEvent(formrd, 'change', function(){
		
		var subjectssl=getSubjects(optionsrd.value)
		
		var optionssl='<option>Please choose a option</option>';
		var keysl;
		
		for(keysl in subjectssl){
			optionssl+='<option value="' + keysl + '">' + subjectssl[keysl] + '</option>';
		}
		topicsl.innerHTML=optionssl;
		
	});
	
	function getSubjects(radio_buttons){
		if(radio_buttons==='interesting'){
			return interesting;
		}
		else if(radio_buttons==='cool'){
			return cool;
		}
		else if(radio_buttons==='easy'){
			return easy;
		}
		else if(radio_buttons==='noreason'){
			return noreason;
		}
	}
}());