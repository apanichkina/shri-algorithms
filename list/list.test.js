const {revertList} = require('./list');
const {expect} = require('chai');

describe('Revert list', function () {
  const testCases = [
    {
      list: {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: null
            }
          }
        },
      },
      expect: {
        value: 4,
        next: {
          value: 3,
          next: {
            value: 2,
            next: {
              value: 1,
              next: null
            }
          }
        },
      },
    },
    {
      list: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      },
      expect: {
        value: 4,
        next: {
          value: 3,
          next: null
        }
      }
    },
    {
      list: {
        value: 3,
        next:  null
      },
      expect: {
        value: 3,
        next:  null
      }
    },
  ];

  testCases.forEach(function (test) {
    let nodeCount = 1;
    let node = test.list;
    while (node.next) {
      node = node.next;
      nodeCount++;
    }

    it('correctly work with ' + nodeCount, function () {
      const result = revertList(test.list);
      expect(result).to.deep.equal(test.expect);
    });
  });
});
