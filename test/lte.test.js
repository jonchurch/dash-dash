import assert from "assert";
import lte from "../lte.js";
import lodashStable from "lodash";
// import lt from '../lt.js';

describe("lte", function() {
  it("should return `true` if `value` is <= `other`", function() {
    assert.strictEqual(lte(1, 3), true);
    assert.strictEqual(lte(3, 3), true);
    assert.strictEqual(lte("abc", "def"), true);
    assert.strictEqual(lte("def", "def"), true);
  });

  it("should return `false` if `value` > `other`", function() {
    assert.strictEqual(lte(3, 1), false);
    assert.strictEqual(lte("def", "abc"), false);
  });

  it("should return same as lodash", () => {
    const args = [[3, 1], [1, 3], [3, 3], ["A", "B"], ["A"]];
    const expected = args.map(arg => lodashStable.lte(...arg));
    const actual = args.map(arg => lte(...arg));
    assert.deepEqual(expected, actual);
  });
});
