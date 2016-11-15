

console.log('I am here');

var cards = ['queen', 'queen', 'king', 'king']; 

var cardsInPlay = []; 

var board = document.getElementById('game_board');
console.log(board);

function createCards () {
	for (i=0; i<cards.length; i++) {	
		var cardElement = document.createElement('div');
		cardElement.className = 'card'; 
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards); 
		board.appendChild(cardElement);
	}
}

function isMatch () {
	if (cardsInPlay[0] === cardsInPlay [1]) { 
		alert("You have found a match");
	} else {
		alert("please try again"); 
	}
}

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(cardsInPlay);
	console.log(this.getAttribute('data-card'));
		
		if (cardsInPlay.length ===2) {
			isMatch();
			cardsInPlay=[];
		}

		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='King.png'>"; 
		} 	else {
			this.innerHTML = "<img src='Queen.png'>"; 
		}
	
}



