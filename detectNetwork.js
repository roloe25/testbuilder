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
  //DoneV1

  var firstTwo = cardNumber.slice(0,2)
  var firstThree = cardNumber.slice(0,3)
  var length = cardNumber.length
  var isLength16or19 = length === 16 || length === 19
  var firstFour = cardNumber.slice(0,4)
  var firstSix = cardNumber.slice(0,6)
  var visaOrSwitch = {'cardtype' : 0 /* card length */}



  if ((firstTwo === '38' || firstTwo === '39')  && length === 14 ){
    return "Diner's Club"
  }
  if ((firstTwo === '34' || firstTwo === '37')  && length === 15 ){
    return "American Express"
  }
  if ((cardNumber.slice(0,1) === '4')  && (length === 13 || length === 16 || length === 19)){
    if(
      // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
      firstFour === '4903' || firstFour === '4905' || firstFour === '4911' || firstFour === '4936')
    {return 'Switch'}
    else {
      return "Visa"}
  }


  if ((firstTwo === '51' || firstTwo === '52'|| firstTwo === '53'|| firstTwo === '54'|| firstTwo === '55') && length === 16 ){
    return "MasterCard"
  }
  if ((firstFour === '6011'|| firstTwo === "65" || firstThree === "644" || firstThree === "645" || firstThree === "646" || firstThree === "647"|| firstThree === "648" || firstThree === "649")  && isLength16or19){
    return "Discover"
  }
  if ((firstFour === '5018' || firstFour === '5020' || firstFour === '5038' || firstFour === '6304')  && (length === 12 || length === 13 || length === 14 || length === 15 || length === 16 || length === 17 || length === 18 || length === 19 )) {
    return "Maestro"
  }

  if (
     // prefix: 622126 - 622925, 624-626, 6282-6288, lengths of 16 - 19
    ( (parseInt(firstSix) >= 622126 && parseInt(firstSix) <= 622925) ||
      (parseInt(firstFour) >= 6282 && parseInt(firstFour) <= 6288) ||
      (parseInt(firstThree) >= 624 && parseInt(firstThree) <= 626) )
      && (length > 15 && length < 20)
   )
  {
    return "China UnionPay"
  }
  if(
    // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
    (firstFour === '4903' || firstFour === '4905' || firstFour === '4911'|| firstFour === '4936'|| firstFour === '6333'|| firstFour === '6759' || firstSix === '564182' || firstSix === '633110')
    && (length === 16 || length === 18 || length === 19 )
   )
  {return 'Switch'}


};


