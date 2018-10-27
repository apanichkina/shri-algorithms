const { insertSort } = require('./insertSort');
const {expect} = require('chai');

describe('InsertSort', function() {
  const testCases = [
    [9, 5, 3, 4],
    [1, 2, 3, 5, 5, 8],
    [2, 6, 5],
    [1, 3, 2],
    [9, 4, 1],
    [1, 3, 4, 0],
  ];

  testCases.forEach(function(test) {
    it('correctly work with ' + test, function() {
      const result = insertSort(test);
      console.log('insertion: ', result);
      const rightResult = test.slice().sort();
      console.log('def:',rightResult);
      expect(result).to.deep.equal(rightResult);
    });
  });
});
