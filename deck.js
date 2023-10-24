const SUITS = ["♠", "♥", "♣", "♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck{
    constructor(cards = freshDeck()){
        this.cards = cards
    }

get numberOfCards(){
    return this.cards.length
}

    shuffle(){
        //Looping through the deck and swapping a card's position with that of another card
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card{
    constructor(suit, value){
        this.suit =  suit
        this.value = value
    }
}

function freshDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}