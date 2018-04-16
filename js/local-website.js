$(document).ready(function(){

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

    }

  startTime();

});
