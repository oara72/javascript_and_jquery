(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY

var villains = [
    {
	  rank: 2,
      AKA: "Penguin",
      bio: "The Penguin (Oswald Chesterfield Cobblepot) is a DC Comics supervillain and an enemy of Batman. He was introduced by artist Bob Kane and writer Bill Finger, he first appeared in Detective Comics #58 (December 1941). ",
      pic: "img/Penguin.jpg"
    },
    {
	  rank: 3,
      AKA: "Riddler",
      bio: "The Riddler, (Edward \"E.\" Nigma, also spelled Nygma by some writers), is an enemy of Batman. Created by writer Bill Finger and artist Dick Sprang, he first appeared in Detective Comics #140 (October 1948). ",
      pic: "img/Riddle.jpg"
    },
    {
	  rank: 1,
      AKA: "Joker",
      bio: "The Joker is a supervillain and the archenemy of Batman. He was first introduced in Batman #1 (Spring 1940) and has remained consistently popular. The Joker is a master criminal with a clown-like appearance. Initially portrayed as a violent sociopath who murders people for his own amusement, the Joker later in the 1940s began to be written as a goofy trickster-thief. That characterization continued through the late-1950s and 1960s before the character became again depicted as a vicious, calculating, psychopathic killer. The Joker has been responsible for numerous tragedies in Batman\'s life, including the paralysis of Barbara Gordon (Batgirl/Oracle) and the murders of Jason Todd (the second Robin) and Jim Gordon\'s second wife Sarah Essen. ",
      pic: "img/Joker.jpg"
    },
    {
	  rank: 4,
      AKA: "Catwoman",
      bio: "Selina Kyle, also known as Catwoman, is a fictional character associated with DC Comics' Batman franchise and created by Bill Finger and Bob Kane. Currently portrayed as an orphan who learned to survive on Gotham City's streets, Selina took to thievery to survive... but determined to do it in style, she learned martial arts and trained extensively to perfect her skills in cat burglary. Her criminal activities are often tempered by a reluctant altruism, making her an inconstant villain and occasional ally to Batman. She regularly eludes capture by the Dark Knight and maintains a complicated, adversarial relationship with Batman that frequently turns flirtatious and occasionally, legitimately romantic. She's one of Batman's best known loves. ",
      pic: "img/Catwoman.jpg"
    },
    {
	  rank: 5,
      AKA: "Two-Face",
      bio: "Harvey Dent was Gotham City\'s amiable and courteous district attorney and one of Batman\'s strongest allies until Sal \"Boss\" Maroni threw acid in his face, hideously scarring him. It also fractured his mental state, causing him to become Two-Face, a schizoid criminal mastermind obsessed with duality and the number two. His former good luck charm, a \"two-headed\" silver dollar with one side deface has been seized on as a reflection of Dent's half-scarred visage. He flips it to decide the fates of his victims. Despite Batman\'s efforts to reform his former ally, Dent is consumed by his fixation on chance and his crimes are designed to prove out his diametric philosophy. ",
      pic: "img/Twofaces.jpg"
    },
    {
	  rank: 6,
      AKA: "Mr. Freeze",
      bio: "Dr. Schivel was a criminal mastermind residing in Gotham City until he met his match in Batman. During an attempted arrest, Batman accidentally spilled some \'instant freeze\' solution on Schivel, freezing his molecular structure making him a being of pure cold. Thus, the criminal \'Mr. Freeze\' was born. ",
      pic: "img/Mrfreeze.jpg"
    },
    {
	  rank: 7,
      AKA: "Scarecrow",
      bio: "The Scarecrow is an overly-obessive and deranged ex-professor of psychology who uses a variety of drugs and psychological tactics to use the fears and phobias of his adversaries. He does not commit his crimes for wealth, but rather as a form of \"research\" to further study the effects of fear on humans (later, he does it to satisfy his own psychopathic desires), making the innocent citizens of Gotham his unwilling guinea pigs. ",
      pic: "img/Scarecrow.jpg"
    },
    {
	  rank: 8,
      AKA: "Ra's al Ghul",
      bio: "Ra's al Ghul, sometimes written Ra's al Ghul, is a DC Comics supervillain and an enemy of Batman. His name is Arabic for \"head of the demon\". Created by writer Dennis O'Neil and artist Neal Adams, he was introduced in Batman #232's \"Daughter of the Demon\" (June 1971). He has also come into conflict with Superman and other DC Comics superheroes.",
      pic: "img/Ras.jpg"
    },
    {
	  rank: 10,
      AKA: "Bane",
      bio: "Bane is an escaped convict from an island prison in South America and a super-villain/assassin. Bane has abnormal physical strength as a result of having undergone experiments involving a derivative of the drug Venom. He became known as \"The Man Who Broke the Bat\" when he broke Batman's back, forcing Bruce Wayne to give up the Batman persona while he recuperated. Bane was originally created by writers Chuck Dixon and Doug Moench and artist Graham Nolan, and he first appeared in Batman: Vengeance of Bane #1 (January 1993). ",
      pic: "img/Bane.jpg"
    },
    {
	  rank: 9,
      AKA: "Poison Ivy",
      bio: "Poison Ivy is an enemy of Batman. She is depicted as one of the world's most prominent eco-terrorists. She is obsessed with plants, botany, and environmentalism. She uses toxins from plants and her own bloodstream for her criminal activities, which are usually aimed at protecting the natural environment. She creates love potions that ensnare Batman, Superman, and other strong-willed individuals. Fellow villain Harley Quinn is her recurring partner-in-crime and possibly her only human friend. ",
      pic: "img/Poisonivy.jpg"
    }
  ]
villains.sort();

  
  var rows = [],                        // rows array
      $min = $('#value-min'),           // Minimum text input
      $max = $('#value-max'),           // Maximum text input
      $table = $('#rank');             // The table that shows results

  function makeRows() {                 // Create table rows and the array
    villains.forEach(function(person) {   // For each person object in people
      var $row = $('<tr></tr>');        // Create a row for them
      $row.append( $('<td></td>').text(person.rank) ); // Add their name
      $row.append( $('<td></td>').text(person.AKA) ); // Add their rate
      $row.append( $('<td></td>').text(person.bio) );
	   $row.append( $("<td></td>").prepend ($('<img />', {src:person.pic})) );
	  
      rows.push({ // Create rows array which links people objects to table rows
        person: person,                 // Reference to the person object
        $element: $row                  // Reference to row as jQuery selection
      });
    });
  }

  function appendRows() {               // Adds rows to the table
    var $tbody = $('<tbody></tbody>');  // Create <tbody> element
    rows.forEach(function(row) {        // For each object in the rows array
      $tbody.append(row.$element);      // Add the HTML for the row
    });
    $table.append($tbody);              // Add the rows to the table
  }

  function update(min, max) {           // Update the table content
    rows.forEach(function(row) {        // For each row in the rows array
	 if (row.person.rank >= min && row.person.rank <= max) { 
     // if (row.person.rank == min) { // If in range
        row.$element.show();            // Show the row
      } else {                          // Otherwise
        row.$element.hide();            // Hide the row
      }
    });
  }

  function init() {                     // Tasks when script first runs
    $('#slider').noUiSlider({           // Set up the slide control
      range: [1, 10], start: [0, 0], handles: 2, margin: 10, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                           // Create table rows and rows array
    appendRows();                         // Add the rows to the table
    update($min.val(), $max.val());     // Update table to show matches
  }

  $(init);                              // Call init() when DOM is ready

}());

