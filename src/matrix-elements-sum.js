const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  flag = Array(matrix[0].length).fill(true)
  // console.log(flag)
  result = 0
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (!flag[j]) { continue }
      if (matrix[i][j] === 0) {
        flag[j] = false
      }
      result += matrix[i][j]
    }
  }
  return result
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// a = matrix = [
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]
//    ]
// console.log(getMatrixElementsSum(a))


module.exports = {
  getMatrixElementsSum
};
