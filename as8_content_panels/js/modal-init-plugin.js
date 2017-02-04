(function($) { 
var $content = $('#share-options').detach(); 
  $.fn.modal = function () {        // Return the jQuery selection
    this.on('click', function() {           // Click handler to open modal
    modal.open({content: $content, width:340, height:300});
    });
    return this;                                 // Return the jQuery selection
  };
}(jQuery));                                      // Pass in jQUery object