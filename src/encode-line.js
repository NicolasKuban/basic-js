const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  temp = ""
  result = ""
  count = 1
  for (i = 0; i < str.length; i++ ) {
    char = str[i]
    // console.log("++>", char, result)
    // console.log(temp !== char)
    if (temp !== char) {
      if (count === 1) {
        result = result.concat(temp)
        // console.log("==>", result)
      } else {
        // result.concat(count, temp)
        result = result.concat(count, temp)
        // console.log("==>", result, count, temp)
      }
      // result.concat()
      temp = char
      count = 1
    } else {
      count += 1
    }
    // console.log(char, temp, count)
    if (i === str.length - 1) {
      if (count === 1) {
        result = result.concat(temp)
        // console.log("==>", result)
      } else {
        // result.concat(count, temp)
        result = result.concat(count, temp)
        // console.log("==>", result, count, temp)
      }
    }
  }
  // if (result.at(-1) !== str.at(-1)) {
  //   result = result.concat(str.at(-1))
  // }
  return result
  
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// console.log(encodeLine('caabbb'))  // => '2a3bc')

module.exports = {
  encodeLine
};
