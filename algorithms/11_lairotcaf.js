exports.lairotcaf = function(input) {
  var n = 0
  var total = 1
  while (total < input) {
    // total = n*(n+1)
    total = n*(n+1) * (n+2)
      console.log("N:", n);
    n++
      // console.log("Inst ==", inst);
      console.log("Total ==", total);
  }

  return n
}

// n:     1 * 2 * 3 * 4 * 5 * 6
//            | / | / | / | / |
// total:     2   6   24  120 720
// multiply integers icrementally until they equal the given number



// Factorialize:
// for (var i = input-1; i >= 1; i--) {
//   input = input*i
//   console.log(input);
// }
