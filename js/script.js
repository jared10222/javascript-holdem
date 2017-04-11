function ConstructCard(value, suit){
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
  }
}

//create the deck of cards
function ConstructDeck(){
  this.deck = createDeck();
}


function createDeck(){
  var deck = [];
  //create clubs
  for(i=0; i<13; i++){
    deck.push(card = new ConstructCard(i, "clubs"));
  }

  //create diamonds
  for(i=0; i<13; i++){
    deck.push(card = new ConstructCard(i, "diamonds"));
  }

  //create hearts
  for(i=0; i<13; i++){
    deck.push(card = new ConstructCard(i, "hearts"));
  }

  //create spades
  for(i=0; i<13; i++){
    deck.push(card = new ConstructCard(i, "spades"));
  }

  return shuffle(deck);

}

function shuffle(array) {
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



//var deck = new ConstructDeck();


/*for(i=0; i<51; i++){
  console.log(deck.deck[i]);
  var DOMobject = document.createElement('div');
  DOMobject.innerText = deck.deck[i]["value"] + " of " + deck.deck[i]["suit"];
  document.body.appendChild(DOMobject);
}*/

var deck = new ConstructDeck();

for(i=0; i<51; i++){
  console.log(deck.deck[i]);
  var DOMobject = document.createElement('div');
  DOMobject.innerText = deck.deck[i]["value"] + " of " + deck.deck[i]["suit"];
  document.body.appendChild(DOMobject);
}


var wholeCardOne = document.getElementById('wholeCardOne');
var wholeCardTwo = document.getElementById('wholeCardTwo')
function dealCards(){
  var card1, card2;
  card1 = deck.deck.pop();
  card2 = deck.deck.pop();
  //wholeCardOne.innerHTML = "<span class='value'>" + card1['value'] + "</span> of <span class='suit'>" + card1['suit'] + "</span>";
  //wholeCardTwo.innerHTML = "<span class='value'>" + card2['value'] + "</span> of <span class='suit'>" + card2['suit'] + "</span>";

  wholeCardOne.innerHTML = "<img src='images/" + card1['value'] + "_of_" + card1['suit'] + ".png' />";
  wholeCardTwo.innerHTML = "<img src='images/" + card2['value'] + "_of_" + card2['suit'] + ".png' />";
}
//look for deal button and add event listener
var dealButton = document.getElementById('deal');
dealButton.addEventListener('click', dealCards);
