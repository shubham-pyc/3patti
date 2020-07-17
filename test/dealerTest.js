const Dealer = require('../src/dealer');
const assert = require('chai').assert;
const CLUBS = require('../src/contants')
const dealer = new Dealer();

describe("Dealer", function () {
    it('dealer got 52 cards in total', function () {
        let result = Object.keys(dealer.deck).length;
        assert.equal(result, 52)
    });
    it('dealer has 13 cards of red', function () {
        let result = dealer.deck.filter((card) => card.club == CLUBS.RED).length;
        assert.equal(result, 13);
    })
    it('dealer has 13 cards of black', function () {
        let result = dealer.deck.filter((card) => card.club == CLUBS.BLACK).length;
        assert.equal(result, 13);
    })
    it('dealer has 13 cards of diamond', function () {
        let result = dealer.deck.filter((card) => card.club == CLUBS.DIAMOND).length;
        assert.equal(result, 13);
    })
    it('dealer has 13 cards of spade', function () {
        let result = dealer.deck.filter((card) => card.club == CLUBS.SPADE).length;
        assert.equal(result, 13);
    })
    it('dealer has 52 unique cards', function () {
        let allCards = dealer.deck.map((card) => `${card.name}${card.value}${card.club}`);
        let cardSet = new Set();
        allCards.forEach(element => cardSet.add(element));
        let unique = cardSet.size;
        assert.equal(unique, 52);
    });
    
    it('dealer only gives one card', function () {
        let card = dealer.giveCard();
        let result = Object.keys(dealer.deck).length;
        assert.equal(result, 51)
    });



})