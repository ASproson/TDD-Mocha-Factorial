var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if factorial 5 === 120', () => {
      // Setup
      const expected = 120;
      const inputNum = 5;
      // Exercise
      const returned = Calculate.factorial(inputNum);
      // Verify
      assert.equal(returned, expected);
    })
  it('tests for edge case of 0', () => {
    // Setup
    const expected = 1;
    const inputNum = 0;
    // Exercise
    const returned = Calculate.factorial(inputNum);
    // Verify
    assert.equal(returned, expected);
  })
  });
});
