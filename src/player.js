class Player {
    constructor(name) {
        this.cards = [];
        this.maxCards = 3;
        this.name = name;
        this.tieCard = undefined;
    }

    takeCard(card) {
        if (this.cards.length <= this.maxCards) {
            this.cards.push(card);
        }
    }
    takeTieCard(card) {
        this.tieCard = card;
    }

    showCards() {
        if (this.tieCard == undefined) {
            let cards = this.cards.reduce((prev, next) => `${prev} ${next.name}(${next.club})`, "");
            console.warn(`${this.name} has ${cards}`);
        } else {
            console.warn(`${this.name} has ${this.tieCard.name}(${this.tieCard.club})`);
        }

    }
}
module.exports = Player;