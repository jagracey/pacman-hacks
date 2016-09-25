
var minBet = 50;
var names = ['blinky', 'pinky', 'inky', 'clyde'];
var bets = {
  'blinky': 4,
  'pinky': 3,
  'inky': 7,
  'clyde': 9
};
var winner;

var handlers = {
  randomWin: function () {
    winner = names[Math.floor(Math.random()*4)]
    return winner;
  }, 
  plus: function (ghost) {
    return bets[ghost] += 1;
  },
  minus: function (ghost) {
    if (count > 0) { return bets[ghost] -= 1; }
    return bets[ghost];
  },
  totalBets: function (bets) {
    return minBet * Object.keys(bets).reduce(function (sum, key) {
      return sum + parseFloat(bets[key]);
    }, 0);
  },
  betPercent: function (bets, ghost) {
    return ( parseFloat(bets[ghost]) / handlers.totalBets(bets) ) * 100;
  },
  playerPayout: function (bets) {
    return handlers.totalBets(bets) / parseFloat(bets[winner]);
  },
  updatePercentages: function (bets) {
    $('#blinky-percent').text(handlers.betPercent(bets, 'blinky'));
    $('#pinky-percent').text(handlers.betPercent(bets, 'pinky'));
    $('#inky-percent').text(handlers.betPercent(bets, 'inky'));
    $('#clyde-percent').text(handlers.betPercent(bets, 'clyde'));
    return true;
  }
};

$(document).ready(function(){
  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  $('#blinky-bets').text(bets['blinky']);
  $('#pinky-bets').text(bets['pinky']);
  $('#inky-bets').text(bets['inky']);
  $('#clyde-bets').text(bets['clyde']);
  $('#total-bets').text(0);

  $('#blinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    $('#blinky-bets').text(handlers.plus('blinky'));
    $('#total-bets').text(handlers.totalBets(bets));
    // $('#blinky-percent').text(handlers.betPercent(bets, 'blinky'));
    handlers.updatePercentages(bets);
  });

  $('#pinky-btn').on('click', function addBet(e) {
    e.preventDefault();
    $('#pinky-bets').text(handlers.plus('pinky'));
    $('#total-bets').text(handlers.totalBets(bets));
    // $('#pinky-percent').text(handlers.betPercent(bets, 'pinky'));
    handlers.updatePercentages(bets);
  });

  $('#inky-btn').on('click', function addBet(e) {
    e.preventDefault();
    $('#inky-bets').text(handlers.plus('inky'));
    $('#total-bets').text(handlers.totalBets(bets));
    // $('#inky-percent').text(handlers.betPercent(bets, 'inky'));
    handlers.updatePercentages(bets);
  });

  $('#clyde-btn').on('click', function addBet(e) {
    e.preventDefault();
    $('#clyde-bets').text(handlers.plus('clyde'));
    $('#total-bets').text(handlers.totalBets(bets));
    // $('#clyde-percent').text(handlers.betPercent(bets, 'clyde'));
    handlers.updatePercentages(bets);
  });


  $('#win-btn').on('click', function calculateWin(e) {
    e.preventDefault();
    $('#winner').text(handlers.randomWin());
    $('#payout').text(handlers.playerPayout(bets));
  });

 });
