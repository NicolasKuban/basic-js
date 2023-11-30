const { NotImplementedError, checkForNotThrowingErrors } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // map1 = new Map()
  function addElement(obj, element) {
    if(obj.has(element)) {
      // console.log(obj.get(element))
      obj.set(element, obj.get(element) + 1)
    } else {
      obj.set(element, 1)
    }
  }
  function getMap(string) {

    let obj = new Map()
    for (char of string) {
      // console.log(char)
      addElement(obj, char)
      // if(map1.has(char)) {
        //   console.log(map1.get(char))
        //   map1.set(char, map1.get(char) + 1)
        // } else {
          //   map1.set(char, 1)
          // }
          // console.log(map1)
    }
    return obj
  }
  total = 0
  map1 = getMap(s1)
  map2 = getMap(s2)
  // console.log("==", map1)
  // console.log("==", map2)
  
  for (char of map1.keys()) {
    // console.log("<==", total)
    // console.log(char, map1.get(char), map2.get(char))
    // a = Math.min(map1.get(char), map2.get(char)) || 0
    // console.log(a)
    total += Math.min(map1.get(char), map2.get(char)) || 0
    // console.log("total =>", total)

  }
  return total
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// s1 = "aabcc" 
// s2 = "adcaa"
// console.log("==>",getCommonCharacterCount(s1, s2))


module.exports = {
  getCommonCharacterCount
};
