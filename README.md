# 3patti
Simple card game simulation

## HOW TO RUN
1. Clone the Repo
```bash
    git clone https://github.com/shubhamg2404/3patti.git
```
2. Install dependencies

```bash
    npm install
```
3. Test if everything is working fine mocha and chai are used for testing frameworks
```bash
    npm test
```
4. Start the simulation
```bash
    npm start
```



## Basic Rules:
- Use a standard deck of cards (no Joker).
- Each player is dealt only three cards.
- 'A' is considered to have a number value of 1.
- 'A' is considered the top card in a face-off. So the order is A > K > Q > J > 10...2

## Victory:
- A trail (three cards of the same number) is the highest possible combination.
- The next highest is a sequence (numbers in order, e.g., 4,5,6. A is considered to have a value of 1).
- The next highest is a pair of cards (e.g.: two Kings or two 10s).
- If all else fails, the top card (by number value wins).
- If the top card has the same value, each of the tied players draws a single card from the deck until a winner is found.
- Only the newly drawn cards are compared to decide a tie. The top card wins a tie.
- For now the suit (spades/hearts), does not matter.
