// TESTS
const myFunctions = require("../index.js");
const assert = require("assert");

// Testing steps:
// 1. setup
// 2. exercise
// 3. verify
// 4. teardown

describe("Math", () => {
  let valueOneInt;
  let valueTwoInt;
  let valueOneStr;
  let valueTwoStr;
  let result;

  // beforeEach(callback) - callback is run before each test
  beforeEach(() => {
    valueOneInt = 5;
    valueTwoInt = 5;
    valueOneStr = '5';
    valueTwoStr = '5';
    result = null;
  });

  // afterEach(callback) - callback is run after each test
  // before(callback) - callback is run before the first test
  // after(callback) - callback is run after the last test

  describe("add", () => {
    it("should add two integers", () => {
      result = myFunctions.add(valueOneInt, valueTwoInt);
      assert.deepEqual(result, 10);
    });

    it("should add an integer with a string", () => {
        result = myFunctions.add(valueOneInt, valueTwoStr);
        assert.deepEqual(result, 55);
    });
  });

  describe("subtract", () => {
    it("should subtract two integers", () => {
      // testValue = 5 <-- moved to beforeEach()
      result = myFunctions.subtract(valueOneInt, valueTwoInt);
      assert.deepEqual(result, 0);
    });

    it("should subtract an integer from a string", () => {
        // testValue = 5 <-- moved to beforeEach()
        result = myFunctions.subtract(valueOneInt, valueTwoStr);
        assert.deepEqual(result, 0);
      });
  });
});
