exports.date = function(input) {
  if (input.indexOf('/') !== -1) {
    inputArr = input.split('/').map(Number)
    mm = (inputArr[0] < 10 ? '0' : '') + inputArr[0];
    dd = (inputArr[1] < 10 ? '0' : '') + inputArr[1];
    yyyy = (50 <= inputArr[2] <= 99 ? '19' : '20') + inputArr[2];
    return (yyyy + "-" + mm + "-" + dd)
  }
  if (input.indexOf('#') !== -1) {
    inputArr = input.split('#').map(Number)
    mm = (inputArr[0] < 10 ? '0' : '') + inputArr[0];
    dd = (inputArr[2] < 10 ? '0' : '') + inputArr[2];
    yyyy = (50 <= inputArr[1] <= 99 ? '19' : '20') + inputArr[1];
    return (yyyy + "-" + mm + "-" + dd)
  }
  if (input.indexOf('*') !== -1) {
    inputArr = input.split('*').map(Number)
    mm = (inputArr[1] < 10 ? '0' : '') + inputArr[1];
    dd = (inputArr[0] < 10 ? '0' : '') + inputArr[0];
    yyyy = inputArr[2]
    return (yyyy + "-" + mm + "-" + dd)
  }
  if (input.indexOf(' ') !== -1) {
    input = input.replace(/,/g, '')
    if (/\D/.test(input.slice(0,3))) {
      mm = input.slice(0,3)
      switch (mm) {
        case "Jan":
          mm = "01"
          break
        case "Feb":
          mm = "02"
          break
        case "Mar":
          mm = "03"
          break
        case "Apr":
          mm = "04"
          break
        case "May":
          mm = "05"
          break
        case "Jun":
          mm = "06"
          break
        case "Jul":
          mm = "07"
          break
        case "Aug":
          mm = "08"
          break
        case "Sep":
          mm = "09"
          break
        case "Oct":
          mm = "10"
          break
        case "Nov":
          mm = "11"
          break
        case "Dec":
          mm = "12"
          break
        default:
          "Error"
          break
      }
    inputArr = input.split(' ').map(Number)
    dd = (inputArr[1] < 10 ? '0' : '') + inputArr[1];
    if (inputArr[2] <100) {
      yyyy = (50 <= inputArr[2] <= 99 ? '19' : '20') + inputArr[2];
    } else {
      yyyy = inputArr[2]
    }
    }
    return (yyyy + "-" + mm + "-" + dd)
  }
}
