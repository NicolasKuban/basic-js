const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // separator default value is '+'. additionSeparator default value is '|'.
  str = String(str)
  repeatTimes = options["repeatTimes"] || 1
  // console.log("repeatTimes =>", repeatTimes)
  separator = options["separator"] || "+"
  // console.log("separator =>", separator)
  
  addition = ("addition" in options) ? String(options["addition"]) : ""
  // console.log("addition =>", addition)
  additionRepeatTimes = ("additionRepeatTimes" in options) ? options["additionRepeatTimes"] : addition ? 1 : 0
  // console.log("additionRepeatTimes =>", additionRepeatTimes)
  additionSeparator = options["additionSeparator"] || "|"
  // console.log("additionSeparator =>", additionSeparator)
  str =str.concat(Array(additionRepeatTimes).fill(addition).join(additionSeparator))
  str = Array(repeatTimes).fill(str).join(separator)
  // console.log(str)
  return str
  
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}




// console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }))
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

// console.log(repeater('TESTstr', 
//                     { separator: 'ds', 
//                     addition: 'ADD!', 
//                     additionSeparator: ')))000' }))
//, 'TESTstrADD!')

// console.log(repeater(true, 
//                     { repeatTimes: 3, 
//                       separator: '??? ', 
//                       addition: false, 
//                       additionRepeatTimes: 2, 
//                       additionSeparator: '!!!' }))
//, 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false');

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };
// console.log(repeater(objWithSpecificCoercion,
//                     { repeatTimes: 2, addition: objWithSpecificCoercion }))
// , 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT')

module.exports = {
  repeater
};
