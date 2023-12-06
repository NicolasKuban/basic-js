const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let temp = String(n);
  for (i = 0; i < temp.length; i++) {
    // console.log(temp[i])
    withoutOne = Number(temp.slice(0,i) + temp.slice(i + 1))
    result = (result < withoutOne) ? withoutOne : result
  }
  return result
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

// console.log(deleteDigit(152))
