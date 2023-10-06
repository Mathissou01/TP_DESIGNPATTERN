const multiplyArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("Argument must be an array of numbers");
  }

  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((acc, curr) => acc * curr, 1);
};

const transformUsers = (users) => {
  if (!Array.isArray(users)) {
    console.log("zizié");
    throw "Users must be provided.";
  }
  if (users.length > 8) {
    throw "Too many users provided.";
  }
  const keyOfUsers = Object.keys(users);
  if (!keyOfUsers.includes("id") || !keyOfUsers.includes("body")) {
    throw "Users must be provided.";
  }

  return users.map((user) => {
    return {
      id: user.id,
      name: user.body.userName,
      age: user.body.userAge,
    };
  });
};

module.exports = {
  multiplyArray,
  transformUsers,
};
