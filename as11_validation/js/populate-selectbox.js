(function(){
  var type  = document.getElementById('equipmentType');// Type select box
  
  var model = document.getElementById('model');        // Model select box
  
  var search = {                                      // Object stores search
    bolex: 'Authoring',
    yashica: 'Scripting',

  };
 
 var print = {                                  // Store print
    kodak: 'writing',
    bolex: 'designin',
    eumig: 'editing',
  };

  // WHEN THE USER CHANGES THE TYPE SELECT BOX
  addEvent(type, 'change', function() {
    if (this.value === 'choose') {                // No selection made
      model.innerHTML = '<option>Please choose a type first</option>';
      return;                                     // No need to proceed further
    }
    var models = getModels(this.value);           // Select the right object

    // LOOP THROUGH THE OPTIONS IN THE OBJECT TO CREATE OPTIONS
    var options = '<option>Please choose a model</option>';
var key;
    for (key in models) {                     // Loop through models
      options += '<option value="' + key + '">' + models[key] + '</option>';
    } // If an option could contain a quote, key should be escaped (see pXXX)
    model.innerHTML = options;                    // Update select box
  });

  function getModels(equipmentType) {
    if (equipmentType === 'search') {            // If type is search
      return search;                             // Return search object
    } else if (equipmentType === 'print') {  // If type is print
      return print;                          // Return print object
    }
  }
}());