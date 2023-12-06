const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let n = matrix.length
  let m = matrix[0].length
  // result = Array(matrix.length).fill(Array(matrix[0].length).fill(0))
  result = []
  // result.map(function(n) {
  //   return "ttt" //Array(m)
  // })
  // for ( i of result) {
  //   console.log(i)
  // }
  // console.log(result[0])
  
  for (i = 0; i < n; i++) {
    row = []
    for (j = 0; j < m; j++){
      // if (i - 1) < 0 || (j - 1) < 0 || ( j + 1 === n) || ( j + 1 === m)
      // console.log(Boolean(matrix[i-1][j-1]))
      temp =(((i - 1) < 0 || (j - 1) <0) ? 0 : Number(matrix[i-1][j-1])) + //+
                    ((i - 1) < 0 ? 0 : Number(matrix[i-1][j])) + // Boolean(matrix[i-1][j]) +
                    (((i - 1) < 0 || (j + 1) === m) ? 0 : Number(matrix[i-1][j+1])) + // Boolean(matrix[i-1][j+1]) +
                    ((j - 1) <0 ? 0 : Number(matrix[i][j-1])) + // Boolean(matrix[i][j-1]) +
                    // Number(matrix[i][j]) + // Boolean(matrix[i][j]) +
                    ((j + 1) === m ? 0 : Number(matrix[i][j+1])) + // Boolean(matrix[i][j+1]) +
                    (((i + 1) === n || (j - 1) <0) ? 0 : Number(matrix[i+1][j-1])) + // Boolean(matrix[i+1][j-1]) +
                    ((i + 1) === n ? 0 : Number(matrix[i+1][j])) + // Boolean(matrix[i+1][j]) +
                    (((i + 1) === n || (j + 1) === m) ? 0 : Number(matrix[i+1][j+1])) // Boolean(matrix[i+1][j+1])
      
      // console.log(i,j,((i - 1) < 0 || (j - 1) <0) ? 0 : Number(matrix[i-1][j-1]))
      // console.log(i,j,(i - 1) < 0 ? 0 : Number(matrix[i-1][j]))
      // console.log("--",i,j,(((i - 1) < 0 || (j - 1) <0) ? 0 : Number(matrix[i-1][j-1])) + ((i - 1) < 0 ? 0 : Number(matrix[i-1][j])))
      // console.log(i,j,((i - 1) < 0 || (j + 1) === m) ? 0 : Number(matrix[i-1][j+1]))
      // console.log(i,j,(j - 1) <0 ? 0 : Number(matrix[i][j-1]))
      // console.log(i,j,Number(matrix[i][j]))
      // console.log(i,j,(j + 1) === m ? 0 : Number(matrix[i][j+1]))
      // console.log(i,j,((i + 1) === n || (j - 1) <0) ? 0 : Number(matrix[i+1][j-1]))
      // console.log(i,j,(i + 1) === n ? 0 : Number(matrix[i+1][j]))
      // console.log(i,j,((i + 1) === n || (j + 1) === m) ? 0 : Number(matrix[i+1][j+1]))
      // console.log("=========")
      // console.log("==>",i,j,temp)
      row.push(temp)

    }
    result.push(row)

  }
  
  return result
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

//  matrix = [
//     [true, false, false],
//     [false, true, false],
//     [false, false, false]
//    ]
// ms = minesweeper(matrix)
// ms[0][0] = 10
// ms[1][1] = 20
// ms[2][2] = 30
// for ( i of ms) {
//   console.log(i)
// }
// console.log(ms)
// console.log(minesweeper(matrix))


module.exports = {
  minesweeper
};
