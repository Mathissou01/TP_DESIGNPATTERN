const { multiplyArray } = require("./math");

describe("Multiplying an Array of Numbers Function", () => {
  it("should multiply an array of positive numbers", () => {
    const result = multiplyArray([2, 3, 4]);
    expect(result).toBe(24);
  });

  it("should return 0 when multiplying an empty array", () => {
    const result = multiplyArray([]);
    expect(result).toBe(0);
  });

  it("should handle negative numbers", () => {
    const result = multiplyArray([-2, 3, -4]);
    expect(result).toBe(24);
  });

  it("should handle decimal numbers", () => {
    const result = multiplyArray([0.5, 0.25, 2]);
    expect(result).toBe(0.25);
  });

  it("should throw an error if the argument is not an array", () => {
    expect(() => multiplyArray(123)).toThrow(
      "Argument must be an array of numbers"
    );
  });
});
