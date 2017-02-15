// const {gate} = require('../algorithms/15_finiteStateGate.js')
// const {expect} = require('chai')
//
// describe('15. Finite State Gate', function() {
//   it('If the gate is OPEN or CLOSED, clicking the remote will cause the it to move, until it completes the cycle of opening or closing.', function(){
//     var input = "remoteClicked\ncycleComplete\nremoteClicked\nremoteClicked\nremoteClicked\nremoteClicked\nremoteClicked\ncycleComplete"
//     expect(gate(input)).to.equal("Gate: CLOSED\nRemote clicked.\nGate: OPENING\nCycle complete.\nGate: OPEN\nRemote clicked.\nGate: CLOSING\nRemote clicked.\nGate: STOPPED_WHILE_CLOSING\nRemote clicked.\nGate: OPENING\nRemote clicked.\nGate: STOPPED_WHILE_OPENING\nRemote clicked.\nGate: CLOSING\nCycle complete.\nGate: CLOSED"
//     )
//   })
// })
