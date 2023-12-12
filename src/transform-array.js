const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // console.log(arr)
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) {
    // console.log("==ERROR==")
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  temp = []
  for (i = 0; i < arr.length; i++) {
    // console.log("=====",i, arr[i], "=====")
    
    if (arr[i] === "--discard-next") {
      // console.log( i, arr[i], temp, "--discard-next")
      i += 2
    } else if (arr[i] === "--discard-prev") {
      // console.log(i ,  arr[i], temp, "--discard-prev")
      if (temp.length) {temp.pop()} else {continue}
    } else if (arr[i] === "--double-next") {
      // console.log(i,  arr[i], temp, "--double-next")
      // temp.push(arr[i + 1])
      if (i+1 < arr.length) {temp.push(arr[i + 1])} else {continue}
    } else if (arr[i] === "--double-prev") {
      // console.log(i,  arr[i],temp, "--double-prev")
      if (i-1 < 0) {continue} else {temp.push(arr[i - 1])}
      // temp.push(arr[i - 1])
    } else {

      temp.push(arr[i])
    }
  }
  
  return temp
}

// console.log(transform([1, 2, 3, '--double-next', 4, 5])) // => [1, 2, 3, 4, 4, 5]
// console.log("++++++++++++++++++++")
// console.log(transform([1, 2, 3, '--discard-prev', 4, 5])) // => [1, 2, 4, 5]
// console.log("++++++++++++++++++++")
// console.log(transform("oooooo"))
// const cases = 
  // ['--discard-prev', 1, 2, 3]
  // ['--double-prev', 1, 2, 3]
  // [1, 2, 3, '--double-next']
  // [1, 2, 3, '--discard-next']
  // [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]

// console.log(transform(cases)) // [1, 2, 3]

module.exports = {
  transform
};
