const {wide} = require('./wideTree');
const {expect} = require('chai');

const treeInput = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 5, children: []},
        {value: 6, children: []},
      ]
    },
    {
      value: 3,
      children: [],
    },
    {
      value: 4,
      children: [
        {value: 7, children: []},
        {value: 8, children: []},
        {value: 9, children: []},
      ]
    }
  ]
};

describe('Deph tree', function () {

  it('correctly', function () {
    const result = []
    wide(treeInput, result);
    expect(result.join(', ')).to.deep.equal('1, 2, 3, 4, 5, 6, 7, 8, 9');
  });
});
