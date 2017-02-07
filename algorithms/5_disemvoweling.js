exports.consonants = function(phrase) {
  noVowels = phrase.replace(/[aeiou]|\s/g, '')
  console.log("No Vowels ==", noVowels);
  return noVowels
}
