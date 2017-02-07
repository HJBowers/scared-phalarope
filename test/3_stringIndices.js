const {indexWord} = require('../algorithms/3_stringIndices.js')
const {expect} = require('chai')

describe('Indices', function() {
  it('returns the word in the phrase according to index provided', function(){
    var phrase = "Catch me outside, how about that?";
    var index = 3
    expect(indexWord(phrase, index)).to.equal("outside");
  })
})
