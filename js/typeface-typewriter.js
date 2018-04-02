$(function() {
  var $input = $('#text-input');
  var $destination = $('#text-destination');
  var space = getHTMLForCharacter(' ');

  function getHTMLForCharacter(character) {
    var characterDefinition = $('.letter-definition[data-character="' + character + '"]').html();
    var characterHTML = '<div class="letter" data-character="' + character + '">' + characterDefinition + '</div>';

    if ( characterDefinition != undefined ) {
      return characterHTML;
    }
  }

  function writeText() {
    var wordArray = [];
    var words = $input.val().split(' ');

    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      var letterElements = letters.map(getHTMLForCharacter);
      wordArray.push(
        '<div class="word">' +
        letterElements.join('') +
        '</div>'
      );
    }

    $destination.html( wordArray.join(space) );
  }

  $input.on('keyup', function() {
    writeText();
  });
});

var sounds = {
   65 : 'a',
   66 : 'b',
   67 : 'c',
   68 : 'd',
   69 : 'e',
   70 : 'f',
   71 : 'g',
   72 : 'h',
   73 : 'i',
   74 : 'j',
   75 : 'k',
   76 : 'l',
   77 : 'm',
   78 : 'n',
   79 : 'o',
   80 : 'p',
   81 : 'q',
   82 : 'r',
   83 : 's',
   84 : 't',
   85 : 'u',
   86 : 'v',
   87 : 'w',
   88 : 'x',
   89 : 'y',
   90 : 'z',
   48 : '0',
   49 : '1',
   50 : '2',
   51 : '3',
   52 : '4',
   53 : '5',
   54 : '6',
   55 : '7',
   56 : '8',
   57 : '9',
   188 : 'comma',
   190 : 'period',
   191 : 'question',

};
document.onkeydown = function(e) {
    var soundId = sounds[e.keyCode];
    if (soundId) document.getElementById(soundId).play();
    else console.log("key not mapped : code is", e.keyCode);
}
