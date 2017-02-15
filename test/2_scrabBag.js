const {scrab} = require('../algorithms/2_scrabBag.js')
const {expect} = require('chai')

describe('2. Scrab Bag', function() {
  it('returns the number of remaining letters, per letter', function() {
    var playedTiles = "AERETOXMYCNS_B"
    expect(scrab(playedTiles)).to.equal("10: E\n9: I\n8: A\n7: O\n5: R, N, T\n4: U, L, D\n3: G, S\n2: P, H, F, V, W\n1: B, Y, J, K, M, Q, C, Z, _\n0: X"
    );
  })
})
