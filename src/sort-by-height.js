const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  sortedValue = arr.filter(item => item !== -1).sort(function(a, b) { return a - b; }).reverse()
  console.log(sortedValue)
  result = arr.map(item => {
    if (item === -1) {
      return item
    } else {
      return sortedValue.pop()
    }
  })
  return result


}


// arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// arr.filter((element, index) => {console.log(index, element)})
// a = arr.filter((item, index) => {
//   if (item !== -1) {
//     return `--${index}`
//   }
// })
// a = arr.filter(item => item !== -1).sort()
// b = arr.map((item, index) => {
//   if (item === -1) {
//     return item
//   } else {
//     return a.shift()
//   }
// })
// c = b.filter
// console.log(a)
// console.log(b)
// console.log(sortByHeight(arr))

module.exports = {
  sortByHeight
};
