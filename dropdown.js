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

  var count = 0;
  var countEl = document.getElementById("count");

  var handlers = {
    plus: function (ghost) {
      return bets[ghost] += 1;
    },
    minus: function (ghost) {
      if (count > 0) {
        return bets[ghost] -= 1;
      }

      return bets[ghost];
    }

  };
  // function plus(ghost){
  //     bets[ghost] += 1;
  //     // count++;
  //     // countEl.value = count;
  // }
  // function minus(ghost){
  //   if (count > 0) {
  //     bets[ghost] -= 1;
  //     // count--;
  //     // countEl.value = count;
  //   }
  // }

  $('#blinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> blinky here');
    $('#blinky-bets').text(handlers.plus('blinky'));
  });

  $('#pinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    console.log('>>> pinky here');

    // bets['pinky'] += 1;
    // $('#pinky-bets').text(bets['blinky']);
    var newBet = new Promise(handlers.plus('pinky'));

    newBet.then(function updateBetCount(val) {
      $('#pinky-bets').text(bets['pinky']);
    });
  });

  $('#inky-btn').on('click', function addBet(e) {
    e.preventDefault();
    console.log('>>> inky here');

    // bets['inky'] += 1;
    // $('#inky-bets').text(bets['blinky']);
    var newBet = new Promise(handlers.plus('inky'));

    newBet.then(function updateBetCount(val) {
      $('#inky-bets').text(bets['inky']);
    });
  });

  $('#clyde-btn').on('click', function addBet(e) {
    e.preventDefault();
    console.log('>>> clyde here');

    // bets['clyde'] += 1;
    // $('#clyde-bets').text(bets['blinky']);
    var newBet = new Promise(handlers.plus('clyde'));

    newBet.then(function updateBetCount(val) {
      $('#clyde-bets').text(bets['clyde']);
    });
  });

 });
