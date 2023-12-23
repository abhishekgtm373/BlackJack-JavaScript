let firstCard = Math.ceil(Math.random() * 13)

let secondCard = Math.ceil(Math.random() * 13)

let sum = firstCard + secondCard

let cards = [firstCard, secondCard]

let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let newCardEl = document.getElementById("newCard-el")

function startGame() {
	
	sumEl.textContent = "Sum: " + sum
	cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
	
	if (sum <= 20){
		message = "Do you want to draw a new Card?"
		
	} 

	else if (sum === 21){
		message = "Wohoo! You've got a Blackjack!!!!"
		hasBlackJack = true
	}

	else {
		message = "Uh-Oh, Somebody lost their money!"
		isAlive = false
	}
	messageEl.textContent = message
	console.log(message)
	
}

function newCard() {
	
	let card = Math.ceil(Math.random() * 13)
	console.log(card)
	newCardEl.textContent = "New Card: " + card
	sum += card
	cards.push(card)
	startGame()
	
}