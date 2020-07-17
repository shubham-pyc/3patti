const Card = require('../src/card')
const RuleBook = require('../src/rulebook');
const assert = require('chai').assert;


const cards = [
    new Card('A', 1, '♣'),
    new Card(2, 2, '♣'),
    new Card(3, 3, '♣'),
    new Card(4, 4, '♣'),
    new Card(5, 5, '♣'),
    new Card(6, 6, '♣'),
    new Card(7, 7, '♣'),
    new Card(8, 8, '♣'),
    new Card(9, 9, '♣'),
    new Card(10, 10, '♣'),
    new Card('Q', 11, '♣'),
    new Card('J', 12, '♣'),
    new Card('K', 13, '♣')
];

const a_trail = [
    cards[0], // A
    cards[0], // A
    cards[0]  // A
]

const double = [
    cards[12],  // K 
    cards[0],  // K
    cards[0]    // A
]

const sequnce_234 = [
    cards[2], // A
    cards[3], // A
    cards[4]  // A

]

const high_a = [
    cards[0],
    cards[4],
    cards[12]
]

const high_k = [
    cards[6],
    cards[9],
    cards[12]
]


const rulebook = new RuleBook();


describe('RuleBook', function () {

    it('high card rule', function () {
        const strength = rulebook.highCard(a_trail);
        assert.equal(strength, 14);
    });

    it('high card is not a sequence', function () {
        const strength = rulebook.sequence(high_k);
        assert.equal(strength, undefined);
    });

    it('double card is not a sequence', function () {
        const strength = rulebook.sequence(double);
        assert.equal(strength, undefined);
    });


    it('sequence card rule', function () {
        const strength = rulebook.sequence(sequnce_234);
        assert.equal(strength, 240)
    });

    it('trail higher then high card rule', function () {
        const trail_s = rulebook.match(a_trail);
        const high_s = rulebook.match(high_a);
        assert.isAbove(trail_s, high_s);
    });

    it('trail higher then sequence rule', function () {
        const trail_s = rulebook.match(a_trail);
        const sequence = rulebook.match(sequnce_234);
        assert.isAbove(trail_s, sequence);
    });

    it('sequnce higher then high card rule', function () {
        const sequence = rulebook.match(sequnce_234);
        const high_s = rulebook.match(high_a);
        assert.isAbove(sequence, high_s);
    });

})
