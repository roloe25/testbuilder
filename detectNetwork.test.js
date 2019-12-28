
/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');

    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it("this is expected to be MasterCard test one", function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it("this is expected to be MasterCard test two", function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it("this is expected to be MasterCard test three", function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  //var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })

});

describe('Discover', function() {
  var expect = chai.expect;
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  for (var prefix = 644; prefix <= 659; prefix++) {
    (function (prefix) {
      var sum13Num = '1234567891234'
      var sum16Num = '1234567891234567'
       it('has a prefix of ' + prefix + ' and a length of 16', function() {
         expect(detectNetwork(prefix.toString() + sum13Num)).to.equal('Discover')})

       it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix.toString() + sum16Num)).to.equal('Discover')
       });  }(prefix))}

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011555556666677')).to.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011555556666677777')).to.equal('Discover')
  });
});

describe('Maestro', function() {
  var expect = chai.expect;

  for (var endingVal = 11111222; endingVal <= 999998888877777; endingVal = endingVal * 10) {
    (function (endingVal) {
    it('has a prefix of ' + 5018 + ' and a length of ' + (endingVal.toString() + "9999").length + '.', function() {
      expect(detectNetwork(5018 + endingVal.toString())).to.equal('Maestro')})

    it('has a prefix of ' + 5020 + ' and a length of ' + (endingVal.toString() + '9999').length + '.', function() {
      expect(detectNetwork(5020 + endingVal.toString())).to.equal('Maestro')})

    it('has a prefix of ' + 5038 + ' and a length of ' + (endingVal.toString() + '9999').length + '.', function() {
      expect(detectNetwork(5038 + endingVal.toString())).to.equal('Maestro')})

    it('has a prefix of ' + 6304 + ' and a length of ' + (endingVal.toString() + '9999').length + '.', function() {
      expect(detectNetwork(6304 + endingVal.toString())).to.equal('Maestro')})
      }(endingVal))}
});

describe('China UnionPay', function() {
  var expect = chai.expect;
  // prefix: 622126 - 622925, 624-626, 6282-6288
  //lengths of 16 - 19

  for (var prefix = 622126; prefix <= 622925; prefix++) {
    (function (prefix) {
      var sum10Num = '1234567891'
       it('has a prefix of ' + prefix + ' and a length of 16', function() {
         expect(detectNetwork(prefix.toString() + sum10Num )).to.equal('China UnionPay')})

       it('has a prefix of ' + prefix + ' and a length of 17', function(){
        expect(detectNetwork(prefix.toString() + sum10Num + '0')).to.equal('China UnionPay')
       });

       it('has a prefix of ' + prefix + ' and a length of 18', function(){
        expect(detectNetwork(prefix.toString() + sum10Num + '00')).to.equal('China UnionPay')
       });

       it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix.toString() + sum10Num + '000')).to.equal('China UnionPay')
       });
      }(prefix))}

  for (var prefix = 6282; prefix <= 6288; prefix++) {
    (function (prefix) {
      var sum12Num = '123456789123'
        it('has a prefix of ' + prefix + ' and a length of 16', function() {
          expect(detectNetwork(prefix.toString() + sum12Num )).to.equal('China UnionPay')})

        it('has a prefix of ' + prefix + ' and a length of 17', function(){
        expect(detectNetwork(prefix.toString() + sum12Num + '0')).to.equal('China UnionPay')
        });

        it('has a prefix of ' + prefix + ' and a length of 18', function(){
        expect(detectNetwork(prefix.toString() + sum12Num + '00')).to.equal('China UnionPay')
        });

        it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix.toString() + sum12Num + '000')).to.equal('China UnionPay')
        });
      }(prefix))}

  for (var prefix = 624; prefix <= 626; prefix++) {
    (function (prefix) {
      var sum13Num = '1234567891234'
        it('has a prefix of ' + prefix + ' and a length of 16', function() {
          expect(detectNetwork(prefix.toString() + sum13Num )).to.equal('China UnionPay')})

        it('has a prefix of ' + prefix + ' and a length of 17', function(){
        expect(detectNetwork(prefix.toString() + sum13Num + '0')).to.equal('China UnionPay')
        });

        it('has a prefix of ' + prefix + ' and a length of 18', function(){
        expect(detectNetwork(prefix.toString() + sum13Num + '00')).to.equal('China UnionPay')
        });

        it('has a prefix of ' + prefix + ' and a length of 19', function(){
        expect(detectNetwork(prefix.toString() + sum13Num + '000')).to.equal('China UnionPay')
        });
      }(prefix))}
});

describe('Switch', function() {
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  var expect = chai.expect;
  var array = ['4903', '4905', '4911', '4936', '6333', '6759']
  var array2 = ['564182', '633110']

  for (var prefix = 0; prefix < array.length ; prefix = prefix + 1) {
    (function (prefix) {
    it('has a prefix of ' + array[prefix] + ' and a length of 16', function() {
      expect(detectNetwork(array[prefix] + "123456789123")).to.equal('Switch')})

    it('has a prefix of ' + array[prefix] + ' and a length of 18', function() {
      expect(detectNetwork(array[prefix] + "12345678912345")).to.equal('Switch')})

    it('has a prefix of ' + array[prefix] + ' and a length of 19', function() {
      expect(detectNetwork(array[prefix] + "123456789123456")).to.equal('Switch')})
    }(prefix))}

  // for (var prefix = 0; prefix < array2.length ; prefix = prefix + 1) {
  //   (function (prefix) {
  //   it('has a prefix of ' + array2[prefix] + ' and a length of 16', function() {
  //     expect(detectNetwork(array2[prefix] + "1234567891")).to.equal('Maestro')})

  //   it('has a prefix of ' + array2[prefix] + ' and a length of 18', function() {
  //     expect(detectNetwork(array2[prefix] + "123456789123")).to.equal('Maestro')})

  //   it('has a prefix of ' + array2[prefix] + ' and a length of 19', function() {
  //     expect(detectNetwork(array2[prefix] + "1234567891234")).to.equal('Maestro')})
  //   }(prefix))}

});

