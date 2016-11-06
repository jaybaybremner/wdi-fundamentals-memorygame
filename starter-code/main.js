
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

function createBoard() {


	for (var i=0; i<4; i++) {
	
	var cardElement = document.createElement('div');
	
	cardElement.className = 'card';
	
	var board = document.getElementById("game-board");

	board.appendChild(cardElement);

	}
}
/*
var createCards = function()



function popup() {
alert("Hello World")
}
*/
