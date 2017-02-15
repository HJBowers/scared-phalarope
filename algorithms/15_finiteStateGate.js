exports.gate = function(input) {
  inputArr = input.split("\n")
  //[ 'remoteClicked', 'cycleComplete', 'remoteClicked', 'remoteClicked', 'remoteClicked', 'remoteClicked', 'remoteClicked', 'cycleComplete' ]
  "Gate: CLOSED
  Remote clicked.
  Gate: OPENING
  Cycle complete.
  Gate: OPEN
  Remote clicked.
  Gate: CLOSING
  Remote clicked.
  Gate: STOPPED_WHILE_CLOSING
  Remote clicked.
  Gate: OPENING
  Remote clicked.
  Gate: STOPPED_WHILE_OPENING
  Remote clicked.
  Gate: CLOSING
  Cycle complete.
  Gate: CLOSED"
  // const open = "Gate: OPEN"
  // const close = "Gate: CLOSED"
  // const opening = "Gate: OPENING"
  // const closing = "Gate: CLOSING"
  // const stopOpen = "STOPPED_WHILE_OPENING"
  // const stopClose = "STOPPED_WHILE_CLOSING"
const remoteClicked = "Remote Clicked."
const arrOC = [ "Gate: OPEN", "Gate: CLOSED"]
const arrOCing = ["Gate: OPENING", "Gate: CLOSING"]
const arrStop = ["STOPPED_WHILE_OPENING", "STOPPED_WHILE_CLOSING"]
const state = "Gate: CLOSED"
const result = ["Gate: CLOSED",]

for (var i = 0; i < inputArr.length; i++) {
  // mm = (inputArr[0] < 10 ? '0' : '') + inputArr[0];
  if (state == "Gate: CLOSED" && inputArr[i] == "remoteClicked" ? state =  ) {
    result.push(remoteClicked)
  }
  if (inputArr[i] == "cycleComplete") {
    result.push(remoteClicked)
  }
  if (inputArr[i] == "remoteClicked") {
    result.push(remoteClicked)
  }
  if (inputArr[i] == "remoteClicked") {
    result.push(remoteClicked)
  }
  if (inputArr[i] == "remoteClicked") {
    result.push(remoteClicked)
  }
  if (inputArr[i] == "remoteClicked") {
    result.push(remoteClicked)
  }
  if (inputArr[i] == "remoteClicked") {
    result.push(remoteClicked)
  }
}
}
