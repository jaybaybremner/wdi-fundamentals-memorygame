
/*var cardOne = "King"
var cardTwo = "King"
var cardThree = "Queen"
var cardFour = "Queen"
var cards = ["King","King,"Queen","Queen"];
var match = "You have found a match!"
var diff = "sorry try again"

//if (cardTwo===cardFour) {
	alert.("You have found a match!")
} else if (cardTwo!===cardFour) {
	alert.("Sorry, try again.")
}
//

document.getElementById('game-board');

*/

var cards = ['queen', 'queen', 'king', 'king']; 

var board = document.getElementById('game-board');

var createBoard = function () {


	for (var i=0; i<5; i++) {
	
	var cardElement = document.createElement('div');
	
	cardElement.className = 'card';

	board.appendChild(cardElement);

	cardElement.setAttribute('data-card', cards[i]);

	cardElement.addEventListener('click', isTwoCards);

	board.appendChild(cardElement);

	board.appendChild(cardElement);

	}
}

var createCards = function()
/*


function popup() {
alert("Hello World")
}
*/

var isTwoCards = function () {
	for (var i=0; i<cards.length; i++) {
    cardElement.addEventListener('click', isTwoCards);
    cardElement.innerHTML = "<img src = "King.png" alt = "king of diamonds"/>";
	}

}



var isMatch = function() { 

}

var cards = [queen, queen, king, king];
var cardsInPLay = [] ;

function isTwoCards() {
	 cardsInPlay.push(this.getAttribute('data-card'));
	   if (cardsInPlay.length === 2) {
	   	 isMatch(cardsInPlay);
	   	   cardsInPlay = [];
	   	}
}

function isMatch(cards) {
	
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}





