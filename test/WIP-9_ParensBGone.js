const {parens} = require('../algorithms/9_ParensBGone.js')
const {expect} = require('chai')

describe('9. Parens-B-Gone', function() {
  it('Remove extra parentheses', function(){
    var input = "((1((23)(45)))6)" ;
    expect(parens(input)).to.equal( "((1((23)(45)))6)" );
  })
  it('Remove extra parentheses', function(){
    var input = "(((1234)(((5)67))))" ;
    expect(parens(input)).to.equal( "((1234)((5)67))" );
  })
  it('Remove extra parentheses', function(){
    var input = "12((3))" ;
    expect(parens(input)).to.equal( "12(3)" );
  })
})
