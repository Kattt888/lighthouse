const assert  = require("chai").assert;

const { keyMatcher } = require("../answers/01");

describe('keyMatcher', () => {
  it('returns true when value for keys "name" is the same string value between\n { name: "Larry", species: "Duck", subject: "Feathers.js" } and\n { mascot: "Duck", name: "Larry", colour: "Yellow" }', () => {
    const result = keyMatcher({name: "Larry", species: "Duck", subject: "Feathers.js"}, {mascot: "Duck", name: "Larry", colour: "Yellow"}, "name");

    assert.strictEqual(result, true);
  });

  it('returns true when value for keys "three" is the same numeric value between\n { one: 1, two: 2, three: 3 } and \n { three: 3, four: 4, five: 5 }', () => {
    const result = keyMatcher({one: 1, two: 2, three: 3}, {three: 3, four: 4, five: 5}, "three");

    assert.strictEqual(result, true);
  });

  it('returns false when value for keys "city" are different values between\n { teacher: "Don", city: "Vancouver"} and \n { teacher: "Juan", city: "Toronto" }', () => {
    const result = keyMatcher({teacher: "Don", city: "Vancouver"}, {teacher: "Juan", city: "Toronto"}, "city");

    assert.strictEqual(result, false);
  });

  it('returns false when values don\'t match by exact type between\n { name: "Larry", wings: 2 } and \n { name: "Daffy", wings: "2" }', () => {
    const result = keyMatcher({name: "Larry", wings: 2}, {name: "Daffy", wings: "2"}, "wings");

    assert.strictEqual(result, false);
  });

  it('returns false if both objects do not have the key "three"\n { one: 1, two: 2 } and \n { two: 2, one: 1 }', () => {
    const result = keyMatcher({ one: 1, two: 2 }, { two: 2, one: 1 }, "three");

    assert.strictEqual(result, false);
  });
});
