const { mergeSortRecursive, merge } = require('./merge_sort');
const {expect} = require('chai');

describe('Merge sort', function() {
  const testCases = [
    [1, 2, 3],
    [2, 5, 1, 3, 7, 2, 3, 8, 6, 3],
  ];

  testCases.forEach(function(test) {
    it('correctly work with ' + test, function() {
      const result = mergeSortRecursive(test);
      expect(result).to.deep.equal(test.sort());
    });
  });
});

describe('Merge', function() {
  const testCases = [
      {
        left: [4],
        right: [3, 2, 1],
        result: [4, 2, 1, 4]
      }
  ];

  testCases.forEach(function(test) {
    it('correctly work with ' + test, function() {
      const result = merge(test.left, test.right);
      expect(result).to.deep.equal(test.result);
    });
  });
});
