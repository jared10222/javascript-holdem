/**
 * Card class
 */
class Card {
  constructor(value, suit){
    this.suit = suit;

    switch(value){
      case 0:
        this.value = "2";
        break;
      case 1:
        this.value = "3";
        break;
      case 2:
        this.value = "4";
        break;
      case 3:
        this.value = "5";
        break;
      case 4:
        this.value = "6";
        break;
      case 5:
        this.value = "7";
        break;
      case 6:
        this.value = "8";
        break;
      case 7:
        this.value = "9";
        break;
      case 8:
        this.value = "10";
        break;
      case 9:
        this.value = "Jack";
        break;
      case 10:
        this.value = "Queen";
        break;
      case 11:
        this.value = "King";
        break;
      case 12:
        this.value = "Ace";
        break;
    }//end switch statement
  }//end constructor
}//end card class



/**
 * Deck class
 */
class Deck {
  constructor() {
    var deck = [];
    var card = "";

    //create clubs
    for(var i=0; i<13; i++){
      deck.push(card = new Card(i, "clubs"));
    }

    //create diamonds
    for(i=0; i<13; i++){
      deck.push(card = new Card(i, "diamonds"));
    }

    //create hearts
    for(i=0; i<13; i++){
      deck.push(card = new Card(i, "hearts"));
    }

    //create spades
    for(i=0; i<13; i++){
      deck.push(card = new Card(i, "spades"));
    }

    this.deck = this.shuffle(deck);

  }//end constructor


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}//end Deck class


/**
 * Dealer Class
 */
class Dealer {
  constructor(){
    this.name = "Brian Baker";
    this.deck = [];
  }

  dealCard(player){
    var card = this.deck.deck.pop();
    player.setWholeCard(card);
  }

  freshDeck(){
    this.deck = new Deck();
  }

  getDeck(){
    return this.deck;
  }

  deckLength(){
    return this.deck.deck.length;
  }

}//end Dealer Class

/**
 * Player Class
 */
class Player {
  constructor(name){
    this.bankroll = 0;
    this.name = name;
    this.wholeCards = [];
  }

  bet(amount){
    this.bankroll -= amount;
  }

  call(amount){
    this.bankroll -= amount;
  }

  fold(){

  }

  getBankRoll(){
    return this.bankroll;
  }

  updateBankRoll(amount){
    this.bankroll += amount;
  }

  getName(){
    return this.name;
  }

  getWholeCards(){
    return this.wholeCards;
  }

  setWholeCard(card){
    this.wholeCards.push(card);
  }

  muckWholeCards(){
    this.wholeCards = [];
  }
}


var playerName = prompt("Please Enter Your Name:");
if(playerName){
  var playerOne = new Player(playerName);
}else{
  var playerOne = new Player("Bob");
}

var computerPlayer = new Player("Brian Eugene Baker");

var dealer = new Dealer();







var wholeCardOne = document.getElementById('wholeCardOne');
var wholeCardTwo = document.getElementById('wholeCardTwo');
var playerOneName = document.getElementById('playerOneName');
playerOneName.innerText = playerOne.getName() + "'s";

var computerWholeCardOne = document.getElementById('computerWholeCardOne');
var computerWholeCardTwo = document.getElementById('computerWholeCardTwo');
var computerPlayerName = document.getElementById('computerPlayerName');
computerPlayerName.innerText = computerPlayer.getName() + "'s";


function dealCards(){

  //get a fresh deck of cards
  dealer.freshDeck();

  //muck whole cards first
  playerOne.muckWholeCards();
  computerPlayer.muckWholeCards();

  var totalPlayers = [computerPlayer, playerOne];


  //deal first whole card
  for(i = 0; i<totalPlayers.length; i++){
    //deal cards
    dealer.dealCard(totalPlayers[i]);
  }
  //deal second whole card
  for(i = 0; i<totalPlayers.length; i++){
    //deal cards
    dealer.dealCard(totalPlayers[i]);
  }

  console.log(playerOne.getWholeCards()[0]);
  console.log(playerOne.getWholeCards()[1]);
  console.log(playerOne.getWholeCards().length);

  console.log(computerPlayer.getWholeCards()[0]);
  console.log(computerPlayer.getWholeCards()[1]);

  console.log(dealer.deckLength());



  for(i=0; i<dealer.deckLength(); i++){
    //console.log(deck.deck[i]);
    console.log(dealer.getDeck().deck[i]);
    var DOMobject = document.createElement('div');
    DOMobject.innerText = dealer.getDeck().deck[i]["value"] + " of " + dealer.getDeck().deck[i]["suit"];
    document.body.appendChild(DOMobject);
  }

  var card1, card2;
  //card1 = deck.deck.pop();
  //card2 = deck.deck.pop();
  //wholeCardOne.innerHTML = "<span class='value'>" + card1['value'] + "</span> of <span class='suit'>" + card1['suit'] + "</span>";
  //wholeCardTwo.innerHTML = "<span class='value'>" + card2['value'] + "</span> of <span class='suit'>" + card2['suit'] + "</span>";

  card1 = playerOne.getWholeCards()[0];
  card2 = playerOne.getWholeCards()[1];

  computerCard1 = computerPlayer.getWholeCards()[0];
  computerCard2 = computerPlayer.getWholeCards()[1];

  wholeCardOne.innerHTML = "<img src='images/" + card1['value'] + "_of_" + card1['suit'] + ".png' />";
  wholeCardTwo.innerHTML = "<img src='images/" + card2['value'] + "_of_" + card2['suit'] + ".png' />";

  computerWholeCardOne.innerHTML = "<img src='images/" + computerCard1['value'] + "_of_" + computerCard1['suit'] + ".png' />";
  computerWholeCardTwo.innerHTML = "<img src='images/" + computerCard2['value'] + "_of_" + computerCard2['suit'] + ".png' />";
}
//look for deal button and add event listener
var dealButton = document.getElementById('deal');
dealButton.addEventListener('click', dealCards);
