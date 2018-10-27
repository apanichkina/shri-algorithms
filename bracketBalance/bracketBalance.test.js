const { bracketBalance } = require('./bracketBalance');
const {expect} = require('chai');

describe('Bracket balance', function() {
  const testCases = [
    {
      line: '123(ff)ff',
      expect: true
    },
    {
      line: '123(ffff',
      expect: false
    },
    {
      line: '123(ff]ff',
      expect: false
    },
    {
      line: '123ffff',
      expect: true
    }
  ];

  testCases.forEach(function(test) {
    it('correctly work with ' + test, function() {
      const result = bracketBalance(test.line);
      expect(result).to.deep.equal(test.expect);
    });
  });
});
