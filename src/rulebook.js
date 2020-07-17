class RuleBook {

    constructor() {
        this.ranks = {
            "trail": 30,
            "sequence": 20,
            "double": 10,
            "highCard": 1
        }


        this.rules = [
            // Rules are placed in order or priority
            this.trail,
            this.sequence,
            this.double,
            this.highCard
        ];
    }

    /*
    *  Function to check which rule apply for the cards
    *  @Param cards: List of Cards
    *  @Returns strength (number) related to hand
    */
    match(cards) {
        for (let rule of this.rules) {
            var strength = rule.bind(this)(cards)
            if (strength != undefined) {
                return strength;
            }
        }
        return 1; // Fail safe
    }


    /*
    *  Function to get weight of the card
    *  @Param value: number value of card
    *  @Returns the weight of the card
    */
    getWeight(value) {
        if (value == 1) {
            return 14;
        }
        return value;
    }


    /*
    *  Function to check if given cards are a trail
    *  @Param cards: list of cards
    *  @Returns strength of trail or undefined (if rule is not applicable) 
    */
    trail(cards) {
        if (cards[0].value === cards[1].value && cards[1].value === cards[2].value) {
            return this.getWeight(cards[0].value) ** this.ranks["trail"];
        }
        return undefined;
    }

    /*
    *  Function to check if given cards are a sequence
    *  @Param cards: list of cards
    *  @Returns strength of sequence or undefined (if rule is not applicable) 
    */
    sequence(cards) {
        cards.sort((a, b) => a.value - b.value);
        for (var i = 0; i < cards.length - 1; i++) {
            if (cards[i].value != cards[i + 1].value - 1) {
                return undefined;
            }

        }
        return cards.map((card) => card.value).reduce((a, b) => a + b, 0) * this.ranks["sequence"];
    }


    /*
    *  Function to check if given cards are a double
    *  @Param cards: list of cards
    *  @Returns strength of double or undefined (if rule is not applicable) 
    */

    double(cards) {
        var map = {};
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            if (card.value in map) {
                return this.getWeight(card.value) * this.ranks["double"]
            }
            map[card.value] = card
        }
        return undefined;
    }

    /*
    *  Function to check if given cards are a highCard
    *  @Param cards: list of cards
    *  @Returns strength of highCard
    */
    highCard(cards) {
        cards = cards.sort((a, b) => this.getWeight(a.value) - this.getWeight(b.value)).map((card) => this.getWeight(card.value))
        return cards.pop() * this.ranks["highCard"]
    }
}




module.exports = RuleBook