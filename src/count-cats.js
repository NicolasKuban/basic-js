const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  function countCatsInYard(yard) {
    cats = 0
    for (element of yard) {
      if (typeof element !== "string") { continue }
      // if (element.includes("^^")) { cats += 1 }
      if (element === "^^") { cats += 1 }
    }
    return cats
  }
  cats = 0
  for (arr of matrix) {
    cats += countCatsInYard(arr)
  }
  return cats
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// a =   [[0, 1, '^^'],
//       [0, '^^', 2],
//       ['^^', 1, 2]
//       ]
// console.log(countCats(a))
module.exports = {
  countCats
};
