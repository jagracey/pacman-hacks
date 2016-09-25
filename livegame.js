$(document).ready(function() {
  // var initSeconds = 30,
  // timer = new Timer("insertSecondsId", initSeconds );
  //
  // timer.start();
  // //
  // var timer = 30;
  //
  // var interval = setInterval(function() {
  //     timer--;
  //     $('.timer').text(timer);
  //     if (timer === 0) clearInterval(interval);
  // }, 1000);

  //
  // var timer = (function() {
  //     var basePeriod = 1000;
  //     var currentSpeed = 1;
  //     var timerElement;
  //     var timeoutRef;
  //     var count = 0;
  //
  //     return {
  //       start : function(speed, id) {
  //         if (speed >= 0) {
  //           currentSpeed = speed;
  //         }
  //         if (id) {
  //           timerElement = document.getElementById(id);
  //         }
  //         timer.run();
  //       },
  //
  //       run: function() {
  //         if (timeoutRef) clearInterval(timeoutRef);
  //         if (timerElement) {
  //           timerElement.innerHTML = count;
  //         }
  //         if (currentSpeed) {
  //           timeoutRef = setTimeout(timer.run, basePeriod/currentSpeed);
  //         }
  //         ++count;
  //       },
  //
  //       setSpeed: function(speed) {
  //         currentSpeed = +speed;
  //         timer.run();
  //       }
  //     }
  //
  // }());
  //
  // window.onload = function(){timer.start(0.3, 'timer');};

  var mins = 10;  //Set the number of minutes you need
      var secs = mins * 60;
      var currentSeconds = 0;
      var currentMinutes = 0;
      setTimeout('Decrement()',1000);

      function Decrement() {
          currentMinutes = Math.floor(secs / 60);
          currentSeconds = secs % 60;
          if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
          secs--;
          document.getElementById("timerText").innerHTML = currentMinutes + ":" + currentSeconds; //Set the element id you need the time put into.
          if(secs !== -1) setTimeout('Decrement()',1000);
      }
});
