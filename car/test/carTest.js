const chai = require("chai"); // 1
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js"); // 2



describe("#shouldBuyCar()", function () {
  it("should return false if it's a hatchback", function () {
    const car = {
      type: "hatchback",
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  it("should return true if it's pink and not a hatchback", function () {
    const car = {
      color: "pink",
      type: "not hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

describe("#shouldBuyCar()", function () {
  it("should return true if car has 6 litres/100km is equal or under $5,000", function () {
  const car = {
    price: "$5000 or lower",
    litresPer100km: "6"
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
    });
  });

  describe("#shouldBuyCar()", function () {
    it("should return true if car has 11 litres/100km is equal or under $5,000", function () {
    const car = {
      price: "$5000 or lower",
      litresPer100km: "11"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
      });
    });

    describe("#shouldBuyCar()", function () {
      it("should return false if car has 6 litres/100km and is over $5,000", function () {
      const car = {
        price: "over $5000",
        litresPer100km: "6"
      };
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
        });
      });

      describe("#shouldBuyCar()", function () {
        it("should return false if car has 11 litres/100km and is over $5,000", function () {
        const car = {
          price: "over $5000",
          litresPer100km: "11S"
        };
        const shouldBuy = shouldBuyCar(car);
        assert.isFalse(shouldBuy);
          });
        });

        describe("#shouldBuyCar()", function () {
          it("should return false if car has 5 litres/100km and is under $5,000", function () {
          const car = {
            price: "under $5000",
            litresPer100km: "5"
          };
          const shouldBuy = shouldBuyCar(car);
          assert.isFalse(shouldBuy);
            });
          });

          describe("#shouldBuyCar()", function () {
            it("should return false if car has 12 litres/100km and is under $5,000", function () {
            const car = {
              price: "under $5000",
              litresPer100km: "12"
            };
            const shouldBuy = shouldBuyCar(car);
            assert.isFalse(shouldBuy);
              });
            });

            // Happy Path
it("should return true if the user is old enough", function () {
  const user = {
    age: 18, // Edge Case
  };
  const canSignUp = signUpUser(user);
  assert.isTrue(canSignUp);
});

// Sad Path
it("should return false if the user is not old enough", function () {
  const user = {
    age: 17, // Edge Case
  };
  const canSignUp = signUpUser(user);
  assert.isFalse(canSignUp);
});