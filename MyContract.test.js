const Calculator = artifacts.require("Calculator");

contract("Calculator", (accounts) => {
  let calculator;

  before(async () => {
    calculator = await Calculator.deployed();
  });

  it("should add two numbers correctly", async () => {
    const result = await calculator.add(5, 3);
    assert.equal(result, 8, "Addition result is incorrect");
  });

  it("should subtract two numbers correctly", async () => {
    const result = await calculator.subtract(10, 4);
    assert.equal(result, 6, "Subtraction result is incorrect");
  });

  it("should multiply two numbers correctly", async () => {
    const result = await calculator.multiply(6, 7);
    assert.equal(result, 42, "Multiplication result is incorrect");
  });

  it("should divide two numbers correctly", async () => {
    const result = await calculator.divide(20, 5);
    assert.equal(result, 4, "Division result is incorrect");
  });

  it("should not allow division by zero", async () => {
    try {
      await calculator.divide(10, 0);
      assert.fail("Division by zero should throw an error");
    } catch (error) {
      assert(error.message.includes("revert"), "Error message must contain revert");
    }
  });
});
