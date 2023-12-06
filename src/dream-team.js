const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  result = []
  // console.log(Array.isArray(members))
  // console.log(members.length)
  if (!(Array.isArray(members) && members.length)) { return false }
  for (element of members) {
    if (typeof element === "string") {
      // console.log(element.trimStart()[0])
      result.push(element.trimStart()[0].toUpperCase())
    }
  }
  // result.sort().join("")
  // console.log(result.sort().join(""))
  // console.log("=================================")
  return result.sort().join("") || false
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// console.log(createDreamTeam(['Matt', 'ann', 'Dmitry', 'Max']))  // => 'ADMM')
// console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])) // => 'LOO')
// console.log(createDreamTeam([
//   '   William Alston ',
//   ' Paul Benacerraf',
//   '  Ross Cameron',
//   '       Gilles Deleuze',
//   '  Arda Denkel ',
//   '  Michael Devitt',
//   '  Kit Fine',
//   ' Nelson Goodman',
//   'David Kolb',
//   '   Saul Kripke',
//   '  Trenton Merricks',
//   '  Jay Rosenberg',
// ]))
// console.log(createDreamTeam([1,2,true, NaN, undefined]))
console.log(createDreamTeam(true))

module.exports = {
  createDreamTeam
};
