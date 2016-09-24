
var minBet = 50;
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
  },
  total: function () {
    console.log('>>> now in the total function');
    var totalBets = bets['blink'] + bets['pinky'] + bets['inky'] + bets['clyde'];
    var pot =  minBet * totalBets ;
    console.log('>>> minBet', minBet);
    console.log('>>> bets[blinky]', bets['blinky']);
    console.log('>>> bets[pinky]', bets['pinky']);
    console.log('>>> bets[inky]', bets['inky']);
    console.log('>>> bets[clyde]', bets['clyde']);
    console.log('>>> totalBets', totalBets);
    console.log('>>> pot', pot);
    return pot;
  },
  sum: function (bets) {
    return minBet * Object.keys(bets).reduce(function (sum, key) {
      return sum + parseFloat(bets[key]);
    }, 0);
  }
};

$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  console.log('>>> this is the minBet', minBet);
  console.log('>>> this is the bets', bets);

  $('#blinky-bets').text(bets['blinky']);
  $('#pinky-bets').text(bets['pinky']);
  $('#inky-bets').text(bets['inky']);
  $('#clyde-bets').text(bets['clyde']);
  $('#total-bets').text(0);

  $('#blinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> blinky here');
    $('#blinky-bets').text(handlers.plus('blinky'));
    $('#total-bets').text(handlers.sum(bets));
  });

  $('#pinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> pinky here');
    $('#pinky-bets').text(handlers.plus('pinky'));
    $('#total-bets').text(handlers.sum(bets));
  });

  $('#inky-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> inky here');
    $('#inky-bets').text(handlers.plus('inky'));
    $('#total-bets').text(handlers.sum(bets));
  });

  $('#clyde-btn').on('click', function addBet(e) {
    e.preventDefault();
    // console.log('>>> clyde here');
    $('#clyde-bets').text(handlers.plus('clyde'));
    $('#total-bets').text(handlers.sum(bets));
  });

 });
