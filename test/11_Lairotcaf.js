const {lairotcaf} = require('../algorithms/11_lairotcaf.js')
const {expect} = require('chai')

describe('11. Lairotcaf', function() {
  it('Reverse factorializes', function(){
    var input = 720;
    expect(lairotcaf(input)).to.equal("6");
  })
  // it('Reverse factorializes', function(){
  //   var input = 120 ;
  //   expect(lairotcaf(input)).to.equal( "5!" );
  // })
  // it('Reverse factorializes', function(){
  //   var input = 5040 ;
  //   expect(lairotcaf(input)).to.equal( "7!" );
  // })
})
