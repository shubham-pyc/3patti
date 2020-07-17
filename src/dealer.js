const Deck = require('./deck');
const RuleBook = require('./rulebook');


class Dealer {

    constructor() {
        this.deck = new Deck();
        this.deck = this.shuffle(this.deck.cards);
        this.ruleBook = new RuleBook();
    }

    /*
   *  Function to shuffle an array
   *  @Param array: list
   *  @Returns shuffled list
   */

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    /*
   *  Function to get one card from deck
   *  @Returns single card object
   */
    giveCard() {
        return this.deck.pop();
    }


    /*
   *  Function to check winner of the game
   *  @Param players: List of Players
   *  @Returns object containing winner or tied players 
   */
    checkWinner(players) {

        for (let player of players) {
            player.strength = this.ruleBook.match(player.cards);
        }

        players.sort((a, b) => a.strength - b.strength);
        return this.findTies(players);
    }

    /*
    *  Function called when there is a tie between players
    *  @Param players: List of Players
    *  @Returns object containing winner or more tied players 
    */

    tieBreaker(players) {
        for (let player of players) {
            player.strength = this.ruleBook.getWeight(player.tieCard.value);
        }
        return this.findTies(players);
    }


    /*
   *  Function called check if there is tie between players
   *  @Param players: List of Players
   *  @Returns object containing winner or more tied players 
   */

    findTies(players) {

        var retValue = {
            "ties": [],
            "winner": undefined,
        }

        players.sort((a, b) => a.strength - b.strength);
        const winner = players.pop();
        const ties = players.filter((player) => player.strength === winner.strength);

        if (ties.length == 0) {
            retValue.winner = winner;
            return retValue;
        }
        ties.push(winner);
        retValue.ties = ties;
        return retValue;

    }

}

module.exports = Dealer;