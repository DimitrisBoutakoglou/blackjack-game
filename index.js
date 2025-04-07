//ftiakse rigged kartes card1,card2
//prosthese tes kai deikse to sum
//if statements gia to an einai 21, ligotero h perissotero
//An einai 21, log blackjack, an einai ligotero grapse na parei ki allh karta ki an einai perissotero pes xasame

let card1 = ""
let card2 = ""
let cards = []
let sum = card1 + card2


let cardsEl = document.getElementById("cards-El")
let sumEl = document.getElementById("sum-El")
let textEl = document.getElementById("text-El")



function setup(){
    card1 = 10
    card2 = 5
    cards.push(card1, card2)
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sum = card1 + card2
    sumEl.textContent = "Sum: " + sum
    playGame()
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
    let card3 = 5
    cards.push(card3)
    cardsEl.textContent += " " + card3
    sum += card3
    sumEl.textContent = "Sum: " + sum
    console.log(cards);
}
