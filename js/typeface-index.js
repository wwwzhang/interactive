///////variable
var scrollposition;
///
$(document).ready(function(){

  $(window).bind('scroll',function(){

    scrollposition=$(window).scrollTop();
    $('.box').css('height', 28+scrollposition*0.1 + "px");
    $('.box').css('width', 22+scrollposition*0.05 + "px");
});

//   $('.A .filled').hover(function(){
//     $(this).css("-webkit-text-stroke", "1px red");
// });

  $('.A .filled').click(function(){
    var smallnumber = Math.random();
    var randomnumber = Math.floor(smallnumber * 30 + 0.1);
    $('.title .A').css('font-size', randomnumber + "em");
    var vid = document.getElementById("a");
    vid.volume = smallnumber;
    a.play();
  });

  $('.B .filled').click(function(){
    var smallnumber = Math.random();
    var randomnumber = Math.floor(smallnumber * 30 + 0.1);
    $('.title .B').css('font-size', randomnumber + "em");
    var vid = document.getElementById("b");
    vid.volume = smallnumber;
    b.play();
  });

  $('.C .filled').click(function(){
    var smallnumber = Math.random();
    var randomnumber = Math.floor(smallnumber * 30 + 0.1);
    $('.title .C').css('font-size', randomnumber + "em");
    var vid = document.getElementById("c");
    vid.volume = smallnumber;
    c.play();
  });

  $('.D .filled').click(function(){
    var smallnumber = Math.random();
    var randomnumber = Math.floor(smallnumber * 30 + 0.1);
    $('.title .D').css('font-size', randomnumber + "em");
    var vid = document.getElementById("d");
    vid.volume = smallnumber;
    d.play();
  });

  $('.abocide').click(function(){
    $('.title .A').css('font-size', "1em");
    abcd.play();
  });

  $('.abocide').click(function(){
    $('.title .B').css('font-size', "1em");
    abcd.play();
  });

  $('.abocide').click(function(){
    $('.title .C').css('font-size', "1em");
    abcd.play();
  });

  $('.abocide').click(function(){
    $('.title .D').css('font-size', "1em");
    abcd.play();
  });

});
