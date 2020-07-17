

const Card = require('./card');
const CLUBS = require('./contants');
class Deck {
    constructor() {
        this.cards = this.unpackDeck();
    }


    /*
    *  Function to get a new deck of cards
    *  @Returns new deck of cards
    */

    unpackDeck() {
        const TotalCards = 52;
        const TotalClubs = [CLUBS.RED, CLUBS.BLACK, CLUBS.SPADE, CLUBS.DIAMOND];
        let eachClubCard = TotalCards / TotalClubs.length;
        let cards = [];

        let faceCards = {
            1: "A",
            13: "K",
            12: "J",
            11: "Q"
        }

        for (let i = 0; i < TotalClubs.length; i++) {
            for (let j = 0; j < eachClubCard; j++) {
                let name = j + 1;
                if (name in faceCards) {
                    name = faceCards[name];
                }
                let club = TotalClubs[i];
                let value = j + 1;

                cards.push(
                    new Card(name, value, club)
                )
            }
        }

        return cards;

    }
}
module.exports = Deck;