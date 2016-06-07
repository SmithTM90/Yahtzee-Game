var Player = {
  count: 0,
  dice1: {
    faceValue: 2,
    held: false
  },
  dice2: {
    faceValue: 2,
    held: false
  },
  dice3: {
    faceValue: 2,
    held: false
  },
  dice4: {
    faceValue: 4,
    held: false
  },
  dice5: {
    faceValue: 5,
    held: false
  }
};

var scoreBoard = {
  aces: {

  },
  twos: {

  },
  threes: {

  },
  fours: {

  },
  fives: {

  },
  sixes: {

  },
  totalScore: {

  },
  bonus: {

  },
  newTotal: {

  },
  threeOAK: {
    dice1: 0,
    dice2: 0,
    dice3: 0

  },
  fourOAK: {

  },
  fullHouse: {

  },
  smStr: {

  },
  lgStr: {

  },
  yahtzee: {
    dice1: 0,
    dice2: 0,
    dice3: 0,
    dice4: 0,
    dice5: 0
  },
  chase: {

  },
  yahtzeeBonus: {

  },
  totalOfLower: {

  },
  totalOfUpper: {

  },
  grandTotal: {

  }
}

var checkArray = [];

var diceArray = [{src: "img/1_dot.png" },
                {src: "img/2_dots.png"},
                {src: "img/3_dots.png"},
                {src: "img/4_dots.png"},
                {src: "img/5_dots.png"},
                {src: "img/6_dots.png"}];

var diceRoll;
var randomDie = 0;

$(document).ready(function() {

  //new game button resets the .val() of the corresponding <td>
  $('#newGame').on('click', function(){
    $('.scoreCell').html('');
  });
  //rules button opens a dialoge box with the rules for yahtzee in it
  $('#rules').on('click', function() {
    console.log("rules");
  })
  //below function handles adding the elements of checkArray together for the purpose of returning a sum to be inputed to the score card
  function add(a,b) {
    return a + b;
  };

  //roll button causes dice to 'animate' and stop on the randomly selected face
  $('#cb1').on('click', function(){
    Player.dice1.held=true;
  });
  $('#cb2').on('click', function(){
    Player.dice2.held=true;
  });
  $('#cb3').on('click', function(){
    Player.dice3.held=true;
  });
  $('#cb4').on('click', function(){
    Player.dice4.held=true;
  });
  $('#cb5').on('click', function(){
    Player.dice5.held=true;
  });

  $('#rollbtn').on('click', function() {
      if(Player.count === 3) {
        return;
      } else {
        if (Player.dice1.held === false) {
          Player.dice1.faceValue=Math.floor(Math.random() * diceArray.length + 1);
        }
        if (Player.dice2.held === false) {
          Player.dice2.faceValue=Math.floor(Math.random() * diceArray.length + 1);
        }
        if (Player.dice3.held === false) {
          Player.dice3.faceValue=Math.floor(Math.random() * diceArray.length + 1);
        }
        if (Player.dice4.held === false) {
          Player.dice4.faceValue=Math.floor(Math.random() * diceArray.length + 1);
        }
        if (Player.dice5.held === false) {
          Player.dice5.faceValue=Math.floor(Math.random() * diceArray.length + 1);
        }
        Player.count++;
      }

      //after 3 rolls, choose a category, once chosen, reset player.count to 0 and all checkboxes to false

    // setIntervalX(function(){
    //   for(var i = 0; i < diceArray.length; i++) {
    //     randomDie = Math.floor((Math.random() * i) + 1);
    //     $('.dice img').attr('src', diceArray[randomDie].src);
    //   }
    // }, 0100, 12);

  });

  $('#aces').on('click', function(){
    var total = 0;
    if(Player.dice1.faceValue === 1){
      total = total + 1;
    }
    if(Player.dice2.faceValue === 1){
      total = total + 1;
    }
    if(Player.dice3.faceValue === 1){
      total = total + 1;
    }
    if(Player.dice4.faceValue === 1){
      total = total + 1;
    }
    if(Player.dice5.faceValue === 1){
      total = total + 1;
    }
    $('#aces').html(total);
  });

  $('#twos').on('click', function(){
    var total = 0;
    if(Player.dice1.faceValue === 2){
      total = total + 2;
    }
    if(Player.dice2.faceValue === 2){
      total = total + 2;
    }
    if(Player.dice3.faceValue === 2){
      total = total + 2;
    }
    if(Player.dice4.faceValue === 2){
      total = total + 2;
    }
    if(Player.dice5.faceValue === 2){
      total = total + 2;
    }
    $('#twos').html(total);
  });

  $('#threes').on('click', function(){
    var total = 0;
    if(Player.dice1.faceValue === 3){
      total = total + 3;
    }
    if(Player.dice2.faceValue === 3){
      total = total + 3;
    }
    if(Player.dice3.faceValue === 3){
      total = total + 3;
    }
    if(Player.dice4.faceValue === 3){
      total = total + 3;
    }
    if(Player.dice5.faceValue === 3){
      total = total + 3;
    }
    $('#threes').html(total);
  });

  $('#fours').on('click', function(){
    var total = 0;
    if(Player.dice1.faceValue === 4){
      total = total + 4;
    }
    if(Player.dice2.faceValue === 4){
      total = total + 4;
    }
    if(Player.dice3.faceValue === 4){
      total = total + 4;
    }
    if(Player.dice4.faceValue === 4){
      total = total + 4;
    }
    if(Player.dice5.faceValue === 4){
      total = total + 4;
    }
    $('#fours').html(total);
  });

  $('#fives').on('click', function(){
    var total = 0;
    if(Player.dice1.faceValue === 5){
      total = total + 5;
    }
    if(Player.dice2.faceValue === 5){
      total = total + 5;
    }
    if(Player.dice3.faceValue === 5){
      total = total + 5;
    }
    if(Player.dice4.faceValue === 5){
      total = total + 5;
    }
    if(Player.dice5.faceValue === 5){
      total = total + 5;
    }
    $('#fives').html(total);
  });

  $('#sixes').on('click', function(){
    var total = 0;
    if(Player.dice1.faceValue === 6){
      total = total + 6;
    }
    if(Player.dice2.faceValue === 6){
      total = total + 6;
    }
    if(Player.dice3.faceValue === 6){
      total = total + 6;
    }
    if(Player.dice4.faceValue === 6){
      total = total + 6;
    }
    if(Player.dice5.faceValue === 6){
      total = total + 6;
    }
    $('#sixes').html(total);
  });

  $('#threeOAK').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
      }
    }
    var length = checkArray.length;
    var arrayString = checkArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,1,1|2,2,2|3,3,3|4,4,4|5,5,5|6,6,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      var splitArray = arrayString.split(",");
      $('#threeOAK').html(checkArray.reduce(add, 0))
    } else {
      console.log(splitArray);
    }
  });

  $('#fourOAK').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
      }
    }
    var length = checkArray.length;
    var arrayString = checkArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("2,2,2");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      var splitArray = arrayString.split(",");
      $('#fourOAK').html(checkArray.reduce(add, 0))
    } else {
      console.log(splitArray);
    }
  });

  $('#fullHouse').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        if(checkArray.indexOf(fValue) === -1) {
          checkArray.push(fValue);
        }
      }
    }
    var length = checkArray.length;
    if (length < 2) {
      $('#fullHouse').html('25')
    } else {
    }
  });
//here is where I learned about Reg Ex!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $('#smStraight').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        if(checkArray.indexOf(fValue) === -1) {
          checkArray.push(fValue);
        }
      }
    }
    var length = checkArray.length;
    var sortedArray = checkArray.sort();
    if (sortedArray = /1234|2345|3456/) {
      $('#smStraight').html('30')
    } else {
    }
  });

  $('#lgStraight').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        if(checkArray.indexOf(fValue) === -1) {
          checkArray.push(fValue);
        }
      }
    }
    var length = checkArray.length;
    var sortedArray = checkArray.sort();
    if (sortedArray = /12345|23456/) {
      $('#lgStraight').html('40')
    } else {
    }
  });

  $('#yahtzee').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        if(checkArray.indexOf(fValue) === -1) {
          checkArray.push(fValue);
        }
      }
    }
    var length = checkArray.length;
    if (length = 1) {
      $('#yahtzee').html('50')
    } else {
    }
  });

  // $('#yahtzee').on('click', function(){
  //   if(Player.dice1.faceValue === Player.dice2.faceValue && Player.dice1.faceValue === Player.dice3.faceValue && Player.dice1.faceValue === Player.dice4.faceValue && Player.dice1.faceValue === Player.dice5.faceValue) {
  //     var total = Player.dice1.faceValue + Player.dice2.faceValue + Player.dice3.faceValue + Player.dice4.faceValue + Player.dice5.faceValue;
  //     $('#yahtzee').html(total);
  //   };
  // });

  //selecting a category to score makes that category unplayable again during the same game
  //categories can be played for 0 score if needed but will input appropriate score if dice fit the requirements for that category
  //applying a score to a category will require checking of the face values and populating the correct table cell, with the total of all dice accepted by that category
  //
});
