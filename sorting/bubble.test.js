const { bubbleSort } = require('./bubble');
const {expect} = require('chai');

describe('Bubble', function() {
  const testCases = [
    [4, 5, 1, 9],
    [1, 2, 3, 5, 5, 8],
    [2, 6, 5],
    [1, 3, 2],
    [9, 4, 1]
  ];

  testCases.forEach(function(test) {
    it('correctly work with ' + test, function() {
      const result = bubbleSort(test);
      console.log(result);
      const rightResult = test.slice().sort();
      console.log(rightResult)
      expect(result).to.deep.equal(rightResult);
    });
  });
});
