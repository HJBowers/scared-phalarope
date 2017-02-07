exports.indexWord = function(phrase, index) {
  phraseArr = phrase.replace(/(?!\w|\s)./g, '').split(" ")
  if (phraseArr[index - 1]) {
    return word = phraseArr[index - 1];
  }
}
