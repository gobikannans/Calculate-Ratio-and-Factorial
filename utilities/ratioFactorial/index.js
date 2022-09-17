const factorialof = require("../factorial/index");
const ratioof = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num) => {
  const ratio = ratioof(num1, num2);
  const factorial = factorialof(num);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
