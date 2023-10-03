const multiplyArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Argument must be an array of numbers");
  }

  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((acc, curr) => acc * curr, 1);
};

module.exports = { multiplyArray };
