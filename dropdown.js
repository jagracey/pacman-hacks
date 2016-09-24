$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  var bets = {
    'blinky': 4,
    'pinky': 3,
    'inky': 7,
    'clyde': 9
  };

  var handlers = {
    plus: function (ghost) {
      return bets[ghost] += 1;
    },
    minus: function (ghost) {
      if (count > 0) { return bets[ghost] -= 1; }
      return bets[ghost];
    }
  };

  $('#blinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> blinky here');
    $('#blinky-bets').text(handlers.plus('blinky'));
  });

  $('#pinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> pinky here');
    $('#pinky-bets').text(handlers.plus('pinky'));
  });

  $('#inky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> inky here');
    $('#inky-bets').text(handlers.plus('inky'));
  });

  $('#clyde-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> clyde here');
    $('#clyde-bets').text(handlers.plus('clyde'));
  });

 });
