exports.guessTheNumber = function(guess) {

  const randomNumber =  Math.floor(Math.random() * (101 - 1)) + 1 

  const correct = false

  while (!correct) {
    let guess = prompt("Guess a number between 1 and 100")

    if (randomNumber == guess) {
      console.log("You won!")
      correct = true
    }
    if (randomNumber < guess){
      console.log("Your guess is too low")
    }
    if (randomNumber > guess){
      console.log("Your guess is too high")
    }
    if (guess == "exit"){
      break
    }
  }
}
