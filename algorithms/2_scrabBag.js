exports.scrab = function(playedTiles) {
  bag = [
    {
      letter: "E",
      number: 12
    },
    {
      letter: 'A',
      number: 9
    },
    {
      letter: 'I',
      number: 9
    },
    {
      letter: 'O',
      number: 8
    },
    {
      letter: 'N',
      number: 6
    },
    {
      letter: 'R',
      number: 6
    },
    {
      letter: 'T',
      number: 6
    },
    {
      letter: 'L',
      number: 4
    },
    {
      letter: 'S',
      number: 4
    },
    {
      letter: 'U',
      number: 4
    },
    {
      letter: 'D',
      number: 4
    },
    {
      letter: 'G',
      number: 3
    },
    {
      letter: '_',
      number: 2
    },
    {
      letter: 'B',
      number: 2
    },
    {
      letter: 'C',
      number: 2
    },
    {
      letter: 'M',
      number: 2
    },
    {
      letter: 'P',
      number: 2
    },
    {
      letter: 'F',
      number: 2
    },
    {
      letter: 'H',
      number: 2
    },
    {
      letter: 'V',
      number: 2
    },
    {
      letter: 'W',
      number: 2
    },
    {
      letter: 'Y',
      number: 2
    },
    {
      letter: 'K',
      number: 1
    },
    {
      letter: 'J',
      number: 1
    },
    {
      letter: 'X',
      number: 1
    },
    {
      letter: 'Q',
      number: 1
    },
    {
      letter: 'Z',
      number: 1
    }
  ]

  function findAmount(tile) {
    number = tile.number
    return number
  }
    numberArr = bag.map(findAmount)

  function findLetter(tile) {
    letter = tile.letter
    return letter
  }
    letterArr = bag.map(findLetter)

  arr12 = []
  arr11 = []
  arr10 = []
  arr9 = []
  arr8 = []
  arr7 = []
  arr6 = []
  arr5 = []
  arr4 = []
  arr3 = []
  arr2 = []
  arr1 = []
  letters12 = ""
  letters11 = ""
  letters10 = ""
  letters9 = ""
  letters8 = ""
  letters7 = ""
  letters6 = ""
  letters5 = ""
  letters4 = ""
  letters3 = ""
  letters2 = ""
  letters1 = ""

  function recountTiles(numberArr){
  for (var i = 0; i < 28; i++) {
    if (numberArr[i] == 12 ) {
      arr12.push(letterArr[i])
      letters12 = ("12" + ": " + arr12.join(", "))
      console.log("Letter 12", letters12);
    }
    if (numberArr[i] == 11 ) {
       arr11.push(letterArr[i])
       letters11 = ("11" + ": " + arr11.join(", "))
    }
    if (numberArr[i] == 10 ) {
       arr10.push(letterArr[i])
       letters10 = ("10" + ": " + arr10.join(", "))
    }
    if (numberArr[i] == 9 ) {
       arr9.push(letterArr[i])
       letters9 = ("9" + ": " + arr9.join(", "))
    }
     if (numberArr[i] == 8 ) {
       arr8.push(letterArr[i])
       letters8 = ("8" + ": " + arr8.join(", "))
    }
     if (numberArr[i] == 7 ) {
       arr7.push(letterArr[i])
       letters7 = ("7" + ": " + arr7.join(", "))
    }
     if (numberArr[i] == 6 ) {
       arr6.push(letterArr[i])
       letters6 = ("6" + ": " + arr6.join(", "))
    }
     if (numberArr[i] == 5 ) {
       arr5.push(letterArr[i])
       letters5 = ("5" + ": " + arr5.join(", "))
    }
     if (numberArr[i] == 4 ) {
       arr4.push(letterArr[i])
       letters4 = ("4" + ": " + arr4.join(", "))
    }
     if (numberArr[i] == 3 ) {
       arr3.push(letterArr[i])
       letters3 = ("3" + ": " + arr3.join(", "))
    }
     if (numberArr[i] == 2 ) {
       arr2.push(letterArr[i])
       letters2 = ("2" + ": " + arr2.join(", "))
    }
     if (numberArr[i] == 1 ) {
       arr1.push(letterArr[i])
       letters1 = ("1" + ": " + arr1.join(", "))
    }
  }
}

  playedTilesArr = playedTiles.split("")
  //
  // for (var i = 0; i < 28; i++) {
  //   for (var j = 0; j < playedTiles.length; j++) {
  //     if (letterArr[i] === playedTilesArr[j]) {
  //       numberArr[i] = numberArr[i] - 1
  //     }
  //     else {
  //       numberArr[i] + ":"
  //     }
  //   }
  // }

  // function recountTiles(numberArr){
  //   return numberArr
  // }

}
