// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //diners club
  let firstTwoLetters = cardNumber.slice(0,2)
  let length = cardNumber.length
  let isLength16or19 = length === 16 || length === 19



  if ((firstTwoLetters === '38' || firstTwoLetters === '39')  && length === 14 ){
    return "Diner's Club"
  }
  if ((cardNumber.slice(0,1) === '4')  && (length === 13 || length === 16 || length === 19)){
    return "Visa"
  }
  if ((firstTwoLetters === '51' || firstTwoLetters === '52'|| firstTwoLetters === '53'|| firstTwoLetters === '54'|| firstTwoLetters === '55') && length === 16 ){
    return "MasterCard"
  }
  if ((cardNumber.slice(0,5) === '6011')  && isLength16or19){
    return "Discover"
  }
  if ((cardNumber.slice(0,5) === '5018'|| cardNumber.slice(0,5) === '5020')  && isLength16or19){
    return "Maestro"
  }

  //american Express


};


