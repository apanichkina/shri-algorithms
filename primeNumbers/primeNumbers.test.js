const { getPrimes } = require('./primeNumbers');
const {expect} = require('chai');

describe('Prime numbers', function() {
  const testCases = [
    {
      n: 4,
      expect: [2, 3]
    },
    {
      n: 7,
      expect: [2, 3, 5, 7]
    },
    {
      n: 2,
      expect: [2]
    },
    {
      n: 1,
      expect: []
    },
    {
      n: 38,
      expect: [2,3,5,7,11,13,17,19,23,29,31,37]
    }
  ];

  testCases.forEach(function(test) {
    it('correctly work with ' + test, function() {
      const result = getPrimes(test.n);
      expect(result).to.deep.equal(test.expect);
    });
  });
});
