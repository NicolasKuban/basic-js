const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
    let temp
      for (let element of arr) {
        if (Array.isArray(element)) {
          temp = this.calculateDepth(element) + 1
        } else {
          temp = 0
        }
        depth = Math.max(depth, temp)
        // console.log("==>", element, depth)
      }

    return depth

  //   let level = 1
  //   let totalDepth = 0
  //   let currentDepth = 0
  //   let result = 1
  //   let tempArr = [1,]
  //   for (let element of arr) {
  //     console.log("==>", element)
  //     if (Array.isArray(element)) {
  //       // let temp = this.calculateDepth(element)
  //       // result = temp > result ? temp : result
  //       let temp = this.calculateDepth(element)
  //       console.log("<==", temp)
  //       result =result + (isNaN(temp) ? 0 : temp)
  //       console.log("result", result)

  //     }
  //     tempArr.push(result)
  //   }
  //   console.log("array", tempArr)
  //   console.log("max", Math.max(...tempArr))
  //   return Math.max(...tempArr)
  //   // throw new NotImplementedError('Not implemented');
  //   // remove line with error and write your code here
  }
}

// const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5])) // => 1
// console.log(depthCalc.calculateDepth([1, 2, [], 3, [4, 5]])) //=> 2
// console.log(depthCalc.calculateDepth([[[]]])) // => 3
// console.log(depthCalc.calculateDepth([1, 
//                             [8, [[]]], 
//                             [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 
//                             2, 
//                             3, 
//                             [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], 
//                             [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 
//                             4, 
//                             5, 
//                             ['6575', ['adas', ['dfg', [0]]]]
//                           ])) //31
// console.log(depthCalc.calculateDepth([1, 
//                                       2, 
//                                       3, 
//                                       4, 
//                                       [1, 
//                                         2, 
//                                         [1, 
//                                           2, 
//                                           [
//                                             [
//                                               []
//                                             ]
//                                           ]
//                                         ]
//                                       ], 
//                                       5, 
//                                       [1, 
//                                         [
//                                           [
//                                             [
//                                               [
//                                                 [
//                                                   []
//                                                 ]
//                                               ]
//                                             ]
//                                           ]
//                                         ]
//                                       ]
//                                     ])) // 8


module.exports = {
  DepthCalculator
};
