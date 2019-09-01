import assert from "assert";
import lowerFirst from "../lowerFirst.js";
import lodashStable from "lodash";

describe("lowerFirst", function() {
  it("should lowercase only the first character", function() {
    assert.strictEqual(lowerFirst("fred"), "fred");
    assert.strictEqual(lowerFirst("Fred"), "fred");
    assert.strictEqual(lowerFirst("FRED"), "fRED");
  });

  it("should return a string", function() {
    const arg = "a";
    const expected = lodashStable.lowerFirst(arg);
    const actual = lowerFirst(arg);
    assert.equal(typeof actual, typeof expected);
  });
});
