var upperTotal = 0;
var lowerTotal = 0;
var diceCount = 0;
//Player object holds values for the dice images, to be referenced in the roll button click handler
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
//I'm only referencing this array in the roll functionality, but when I sub out the array.length + 1 for it's equivalent numerical value (, sometimes my rolls give me a 0 value.
var diceArray = [{src: "src/img/1_dot.png" },
                {src: "src/img/2_dots.png"},
                {src: "src/img/3_dots.png"},
                {src: "src/img/4_dots.png"},
                {src: "src/img/5_dots.png"},
                {src: "src/img/6_dots.png"}];

$(document).ready(function() {
  //new game button resets the .val() of the corresponding <td>
  $('#newGame').on('click', function(){
    $('.cell').html('');
    Player.count = 0;
  });
  //rules button opens a dialoge box with the rules for yahtzee in it
  $('#rules').on('click', function() {
    console.log("rules");
  });
  //below function handles adding the elements of checkArray together for the purpose of returning a sum to be inputed to the score card
  function add(a,b) {
    return a + b;
  };
  //This handles the checkboxes for each dice, holding it so that it isn't rolled, could be more DRY.
  $('#checkbox1').on('change', function(){
    Player.dice1.held = $(this).prop("checked");
  });
  $('#checkbox2').on('change', function(){
    Player.dice2.held = $(this).prop("checked");
  });
  $('#checkbox3').on('change', function(){
    Player.dice3.held = $(this).prop("checked");
  });
  $('#checkbox4').on('change', function(){
    Player.dice4.held = $(this).prop("checked");
  });
  $('#checkbox5').on('change', function(){
    Player.dice5.held = $(this).prop("checked");
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
      for(var key in Player) {
        if(key.indexOf('dice') !== -1){
          diceCount++
          $('#pic' + diceCount).attr('src', 'src/' + Player['dice' + diceCount].sides[Player[key].faceValue]);
        }
      }
      diceCount = 0;
  });
  $('#aces').on('click', function(){
    console.log(document.getElementById('checkbox1'))
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#totalScore').on('click', function(){
    var scoreArray = $('#topTable .scoreCell');
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
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
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#threeOAK').on('click', function(){
    var threeArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        threeArray.push(fValue);
        threeArray.sort();
      }
    }
    var length = threeArray.length;
    var arrayString = threeArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,1,1|2,2,2|3,3,3|4,4,4|5,5,5|6,6,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      var splitArray = arrayString.split(",");
      $('#threeOAK').html(threeArray.reduce(add, 0))
    } else {
      $('#threeOAK').html('0');
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#fourOAK').on('click', function(){
    var fourArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        fourArray.push(fValue);
        fourArray.sort();
      }
    }
    var length = fourArray.length;
    var arrayString = fourArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,1,1,1,|2,2,2,2|3,3,3,3|4,4,4,4|5,5,5,5|6,6,6,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      var splitArray = arrayString.split(",");
      $('#fourOAK').html(fourArray.reduce(add, 0))
    } else {
      $('#fourOAK').html('0');
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#fullHouse').on('click', function(){
    var fullHouseArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        if(fullHouseArray.indexOf(fValue) === -1) {
          fullHouseArray.push(fValue);
        }
      }
    }
    var length = fullHouseArray.length;
    if (length = 2) {
      $('#fullHouse').html('25');
    } else {
      $('#fullHouse').html('0');
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
//here is where I learned about Reg Ex!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  $('#smStraight').on('click', function(){
    var smallArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        smallArray.push(fValue);
        smallArray.sort();
      }
    }
    var length = smallArray.length;
    var arrayString = smallArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,2,3,4|2,3,4,5|3,4,5,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      $('#smStraight').html('30');
    } else {
      $('#smStraight').html('0');
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#lgStraight').on('click', function(){
    var largeArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        largeArray.push(fValue);
        largeArray.sort();
      }
    }
    var length = largeArray.length;
    var arrayString = largeArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,2,3,4,5|2,3,4,5,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      $('#lgStraight').html('40');
    } else {
      $('#lgStraight').html('0');
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#yahtzee').on('click', function(){
    var yahtzeeArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        yahtzeeArray.push(fValue);
      }
    }
    var length = yahtzeeArray.length;
    var arrayString = yahtzeeArray.toString();
    console.log(arrayString);
    var arrayPattern = new RegExp("1,1,1,1,1|2,2,2,2,2|3,3,3,3,3|4,4,4,4,4|5,5,5,5,5|6,6,6,6,6");
    var patternCheck = arrayPattern.test(arrayString);
    console.log(length, patternCheck);
    if (patternCheck === true) {
      $('#yahtzee').html('50');
    } else {
      $('#yahtzee').html('0');
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
  $('#chance').on('click', function(){
    total = 0;
    var chanceArray = [];
    for (var key in Player) {
      var fValue = Player[key].faceValue;
      if(fValue) {
        chanceArray.push(fValue);
      }
    }
    for(var i=0; i < chanceArray.length; i++) {
      $('#chance').html(total += chanceArray[i]);
    }
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  })
$('#totalLower').on('click', function(){
    var scoreArray = $('#bottomTable .scoreCell');
    for(var i = 0; i < scoreArray.length; i++){
      if(scoreArray[i].innerHTML === "") {
        return;
      } else {
        var arrayScore = scoreArray[i].innerHTML;
        var scoreNumber = parseInt(arrayScore);
        lowerTotal += scoreNumber;
      }
    }
    $('#totalLower').html(lowerTotal);
    $('#grandTotal').html(upperTotal + lowerTotal);
    $('input[type="checkbox"]').prop("checked", false);
    Player.dice1.held = false;
    Player.dice2.held = false;
    Player.dice3.held = false;
    Player.dice4.held = false;
    Player.dice5.held = false;
    Player.count = 0;
  });
});
