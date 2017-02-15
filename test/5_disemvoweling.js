const {consonants} = require('../algorithms/5_disemvoweling.js')
const {expect} = require('chai')

describe('5. Disemvoweling', function() {
  it('removes vowels from the phrase', function() {
    var phrase = "i choose a community of trees over a community of buildings"
    expect(consonants(phrase)).to.equal("chscmmntyftrsvrcmmntyfbldngs")
  })
})
