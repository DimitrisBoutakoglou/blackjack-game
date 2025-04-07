
let card1 = ""
let card2 = ""
let cards = []
let sum = card1 + card2
let gameStarted = false

let cardsEl = document.getElementById("cards-El")
let sumEl = document.getElementById("sum-El")
let textEl = document.getElementById("text-El")

function gameCheck(){
    if(gameStarted = true){
        document.getElementById("startGame").disabled = true;
    } else if (gameStarted = false){
        document.getElementById("startGame").disabled = true;
    }
}

function stopGame(){
    if(sum >= 21){
        document.getElementById("drawCard").disabled = true
    } else document.getElementById("drawCard").disabled = false
}

function randomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard === 1){
        randomCard = 11
    } else if(randomCard > 10){
        randomCard = 10
    } else randomCard = randomCard
    return randomCard
}


function setup(){
    gameStarted = true;
    card1 = randomCard()
    card2 = randomCard()
    cards.push(card1, card2)
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sum = cards[0] + cards[1]
    sumEl.textContent = "Sum: " + sum
    playGame()
    gameCheck()
    stopGame()
}

function playGame(){
if( sum === 21 ){
    textEl.textContent = "Congrats, you win!"
} else if( sum < 21){
    textEl.textContent = "Draw another card?"
} else if ( sum > 21){
    textEl.textContent = "You lose!"
}
}


function drawCard(){
    let card3 = randomCard()
    cards.push(card3)
    cardsEl.textContent += " " + card3
    sum += card3
    sumEl.textContent = "Sum: " + sum
    playGame()
    stopGame()
}
