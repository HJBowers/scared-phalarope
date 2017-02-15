const {guessTheNumber} = require('../algorithms/1_guessTheNumber.js')
const {expect} = require('chai')

describe('1. Guess The Number', function() {
  it('generates a random number to guess. If guess is correct, return you win. If guess is lower/higher than random number, return too low/high.', function() {
    // const guess = prompt("Guess a number between 1 and 100")
    expect(guessTheNumber(guess)).to.equal(randomNumber)
    }
  )
})
