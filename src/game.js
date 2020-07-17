const Dealer = require('./dealer');
const Player = require('./player');
const Card = require('./card');


class Game {
    constructor(players = 3, cards = 3) {
        this.dealer = new Dealer();
        this.players = [];
        this.maxCards = cards;
        for (let index = 0; index < players; index++) {
            this.players.push(new Player(`P${index + 1}`));
        }
        this.common_once = true;

    }


    /*
    *  Function to show hands of players
    *  @Param players: List of Players
    */
    showHands(players) {
        players.map((player) => player.showCards());
    }


    /*
    *  Function to get each player a tie breaker card
    *  @Param players: List of Players
    */
    drawTieCardsForEachPlayer(players, same = false) {


        for (let index = 0; index < players.length; index++) {
            const player = players[index];
            if (same) {
                player.takeTieCard(new Card(2, 2, 'red'));
            } else {

                player.takeTieCard(this.dealer.giveCard());
            }
        };
        if (same) {
            this.common_once = false;
        }
    }



    /*
    *  Function to start the game distributes each player with a card
    */
    start() {
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            for (let cardNumber = 0; cardNumber < this.maxCards; cardNumber++) {
                player.takeCard(this.dealer.giveCard())
            }

        };

        this.showHands(this.players);

        var result = this.dealer.checkWinner(this.players);

        if (result.winner) {
            console.warn("------ winner ---------");
            result.winner.showCards();
        } else {
            while (true) {
                console.warn("------tied----------");
                let { ties } = result;
                this.drawTieCardsForEachPlayer(ties, this.common_once);
                this.showHands(ties);
                result = this.dealer.tieBreaker(ties)
                if (result.winner) {
                    console.warn("----tie winner---")
                    console.warn(result.winner.showCards());
                    break;
                }
            }

        }

    }
}
module.exports = Game;

