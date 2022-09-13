//Create a cards game called War
//create a deck of cards with 52 cards, numbers range from 1 to 13, 4 times
//we need to shuffle the deck
//split the deck
//then we play - > we iterate through the array of deck 1 and deck 2 and compare
//if index 0 of deck1 is greater than deck 2, player of deck 1 is awarded a point
//iterate throught both arrays, while highest index is awarded a point
//deck with the most points wins

class Card {  
    constructor() {
        this.suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
        this.value = [];
    }
    //created a card class with 2 properties, suit and value

    assignValue(){
        for(let i=0; i < this.suit.length; i++) { //iterated through suit array and iterations is 4
        console.log(`The current iteration is ${i}`);
            for(let j = 0; j < 13; j++) {  //iteration is 1-13, 4 times
                console.log(`The current iteration is: ${i} of ${j}`)
                this.value.push(j+1); //iteration was pushed to value property

            }
        }
        console.log(this.value);
    }
}

firstCard = new Card(); //created new instance of a card
firstCard.assignValue(); 

//The above syntax creates the cards for our deck of 52 cards. The numeric values go from 1 to 13 
// and this multiplies by 4 because there is 4 different suits in a traditional deck of cards
class Player {
    constructor(playernumber, playerhand) {
        this.score = 0;
        this.name = "Player" + playernumber;
        this.hand = playerhand;
    }

    incrementScore() { //adds up score 
        this.score++;
    }

}

class Deck {
    constructor(number) {
        this.cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.number = number;
        

    }
//Creates a class called deck with 4 different properties

    get numberOfCards() { //created getter
        return this.cards.length;
    }


   shuffle() {    //shuffles index in the end of the array with indexes in the front
    for(let i = this.numberOfCards - 1; i > 0; i--) { 
        const newIndex = Math.floor(Math.random() * (i + 1)); //gives us placement inside of our array that we havent accessed yet
        const oldValue = this.cards[newIndex];
        this.cards[newIndex] = this.cards[i];
        this.cards[i] = oldValue;
        }
    }
}


//creates 2 variables
let playerOneDeck, playerTwoDeck;

function startGame() {
    const deck = new Deck();
    deck.shuffle(); 
    console.log("this deck is shuffeled:", deck.cards); //gives me the shuffled array of numbers(cards);

    
    playerOneDeck = new Player(1, deck.cards.slice(0, 26)); //create new instance of player because of increment score function
    playerTwoDeck = new Player(2, deck.cards.slice(26, 52));

    console.log(playerOneDeck); // prints out Deck cut in half, each deck with 24 cards each, all shuffled
    console.log(playerTwoDeck);


    for(let i = 0; i < 26; i++) {
        let player1Points = playerOneDeck.hand[i]; //set playerpoints to sliced deck of random cards
        let player2Points = playerTwoDeck.hand[i];
        

        if(player1Points === player2Points) {
            continue
        }
        if(player1Points > player2Points){
            playerOneDeck.incrementScore();
        } else {
            playerTwoDeck.incrementScore();
        }
    }
    showScore();
    
    
    function showScore() {
        console.log("Inside of my showscore function:")
        let winner = playerOneDeck.score > playerTwoDeck.score ? playerOneDeck : playerTwoDeck;
        alert(`${winner.name} is the winner
        PlayerOne's score is ${playerOneDeck.score}
        PlayerTwo's score is ${playerTwoDeck.score}`);
    }
}

