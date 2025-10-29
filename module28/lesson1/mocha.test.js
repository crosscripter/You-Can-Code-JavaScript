const assert = require('assert');

describe('Array', function () {
  describe('#indexOf()', function () {

    it('should return -1 when the value is not present', function () {
      // Using Mocha and assert.equal instead of Jest's expect
      assert.equal([-1, 0, 1].indexOf(2), -1);
    });

  });
});
