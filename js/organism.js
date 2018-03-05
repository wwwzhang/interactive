$(document).ready(function(){

  // turning on and off the lights

    // by default, light is on
    var state = 'on';
    // var partySound = new Audio('../sounds/kiwi.mp3');

    // click the button
    $('button').click(function(){

        if(state == 'off'){
          // turn on the lights
          $('body').removeClass('off');
          $('body').addClass('on');
          $(this).removeClass('off');
          state = 'on';
          // partySound.muted=true;
        }

        else {
          // turn off the lights
          $('body').removeClass('on');
          $('body').addClass('off');
          $(this).addClass('off');
          state = 'off';
          // partySound.play();
          // partySound.loop=true;
          $('a').attr('href',"../images/eel2.gif");
        }

    });


  function goDown(){
    $('#rectangle1').css('height', '5%');
    $('#head').css('bottom', '5%');
    }

  function goUp(){
    $('#rectangle1').css('height', '85%');
    $('#head').css('bottom', '85%');
    }


  // show a clock
  // via https://stackoverflow.com/questions/18229022/how-to-show-current-time-in-javascript-in-the-format-hhmmss

  function checkTime(i) {
      return (i < 10) ? "0" + i : i;
  }

  function startTime() {
      var today = new Date(),
          h = checkTime(today.getHours()),
          m = checkTime(today.getMinutes()),
          s = checkTime(today.getSeconds());
      $('#clock').html(h + ":" + m + ":" + s);
      t = setTimeout(function () {
          startTime();
      }, 500);


      if (s % 10 == 0) {
        goUp();
      }

    }

  startTime();

  $('#head').click(function(){
    goDown();
  });

  $('p').click(function(){
  $('img').show();
  });

});
