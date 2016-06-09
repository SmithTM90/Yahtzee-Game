var upperTotal = 0;
var lowerTotal = 0;
var diceCount = 0;

var Player = {
  count: 0,
  dice1: {
    faceValue: 2,
    held: false,
    sides: {
      1: "../img/1_dot.png",
      2: "../img/2_dots.png",
      3: "../img/3_dots.png",
      4: "../img/4_dots.png",
      5: "../img/5_dots.png",
      6: "../img/6_dots.png"
    }
  },
  dice2: {
    faceValue: 2,
    held: false,
    sides: {
      1: "../img/1_dot.png",
      2: "../img/2_dots.png",
      3: "../img/3_dots.png",
      4: "../img/4_dots.png",
      5: "../img/5_dots.png",
      6: "../img/6_dots.png"
    }
  },
  dice3: {
    faceValue: 2,
    held: false,
    sides: {
      1: "../img/1_dot.png",
      2: "../img/2_dots.png",
      3: "../img/3_dots.png",
      4: "../img/4_dots.png",
      5: "../img/5_dots.png",
      6: "../img/6_dots.png"
    }
  },
  dice4: {
    faceValue: 2,
    held: false,
    sides: {
      1: "../img/1_dot.png",
      2: "../img/2_dots.png",
      3: "../img/3_dots.png",
      4: "../img/4_dots.png",
      5: "../img/5_dots.png",
      6: "../img/6_dots.png"
    }
  },
  dice5: {
    faceValue: 2,
    held: false,
    sides: {
      1: "../img/1_dot.png",
      2: "../img/2_dots.png",
      3: "../img/3_dots.png",
      4: "../img/4_dots.png",
      5: "../img/5_dots.png",
      6: "../img/6_dots.png"
    }
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
    $('.cell').html('');
    Player.count = 0;
  });
  //rules button opens a dialoge box with the rules for yahtzee in it
  $('#rules').on('click', function() {
    console.log("rules");
  })
  //below function handles adding the elements of checkArray together for the purpose of returning a sum to be inputed to the score card
  function add(a,b) {
    return a + b;
  };

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
    //after 3 rolls, choose a category, once chosen, reset player.count to 0 and all checkboxes to false
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
      //This was a 3 person effort, but not very much from myself.
      for(var key in Player) {
        console.log(Player[key].faceValue);
        if(key.indexOf('dice') !== -1){
          diceCount++
          $('#pic' + diceCount).attr('src', Player['dice' + diceCount].sides[Player[key].faceValue]);
        }
      }
      diceCount = 0;
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
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
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
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
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
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
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
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
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
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
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
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
  });

  $('#totalScore').on('click', function(){
    var scoreArray = $('#topTable .scoreCell');
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        upperTotal += scoreNumber;
      }
    }
    $('#totalScore').html(upperTotal);
    $('#totalUpper').html(upperTotal);
    if (upperTotal > 63) {
      $('#bonus').html(35);
      $('#newTotal').html(upperTotal + 65);

    }
  });

  $('#threeOAK').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
        checkArray.sort();
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
      $('#threeOAK').html('0');
    }
  });

  $('#fourOAK').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
        checkArray.sort();
      }
    }
    var length = checkArray.length;
    var arrayString = checkArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,1,1,1,|2,2,2,2|3,3,3,3|4,4,4,4|5,5,5,5|6,6,6,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      var splitArray = arrayString.split(",");
      $('#fourOAK').html(checkArray.reduce(add, 0))
    } else {
      $('#fourOAK').html('0');
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
      $('#fullHouse').html('25');
    } else {
      $('#fullHouse').html('0');
    }
  });
//here is where I learned about Reg Ex!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  $('#smStraight').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
        checkArray.sort();
      }
    }
    var length = checkArray.length;
    var arrayString = checkArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,2,3,4|2,3,4,5|3,4,5,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      $('#smStraight').html('30');
    } else {
      $('#smStraight').html('0');
    }
  });

  $('#lgStraight').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
        checkArray.sort();
      }
    }
    var length = checkArray.length;
    var arrayString = checkArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,2,3,4,5|2,3,4,5,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      $('#lgStraight').html('40');
    } else {
      $('#lgStraight').html('0');
    }
  });

  $('#yahtzee').on('click', function(){
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
      }
    }
    var length = checkArray.length;
    var arrayString = checkArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,1,1,1,1|2,2,2,2,2|3,3,3,3,3|4,4,4,4,4|5,5,5,5,5|6,6,6,6,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      $('#yahtzee').html('50');
    } else {
      $('#yahtzee').html('0');
    }
  });
  //I'm leaving this here to show my original check for a yahtzee, as some sort of relic to my past code and how I've re-factored it since then?

  // $('#yahtzee').on('click', function(){
  //   if(Player.dice1.faceValue === Player.dice2.faceValue && Player.dice1.faceValue === Player.dice3.faceValue && Player.dice1.faceValue === Player.dice4.faceValue && Player.dice1.faceValue === Player.dice5.faceValue) {
  //     var total = Player.dice1.faceValue + Player.dice2.faceValue + Player.dice3.faceValue + Player.dice4.faceValue + Player.dice5.faceValue;
  //     $('#yahtzee').html(total);
  //   };
  // });

  $('#chance').on('click', function(){
    total = 0;
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        checkArray.push(fValue);
      }
    }
    console.log(checkArray);
    for(var i=0; i < checkArray.length; i++) {
      $('#chance').html(total += checkArray[i]);
    }
  })

$('#totalLower').on('click', function(){
    var scoreArray = $('#bottomTable .scoreCell');
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        //console.log(arrayScore);
        var scoreNumber = parseInt(arrayScore);
        lowerTotal += scoreNumber;
      }
    }
    $('#totalLower').html(lowerTotal);
    $('#grandTotal').html(upperTotal + lowerTotal);
  });

  //selecting a category to score makes that category unplayable again during the same game
  //categories can be played for 0 score if needed but will input appropriate score if dice fit the requirements for that category
  //applying a score to a category will require checking of the face values and populating the correct table cell, with the total of all dice accepted by that category
  //
});
