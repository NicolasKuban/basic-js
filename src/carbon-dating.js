const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // t = (1 / lambda) * Math.LN2(1 + D / P) 
  if (arguments.length === 0) {return false}
  // console.log(typeof sampleActivity)
  if (typeof sampleActivity !== "string") {return false};
  let activity = Number(sampleActivity);
  // console.log(activity);
  if (isNaN(activity)) {return false}
  if (activity <= 0 || activity > MODERN_ACTIVITY) {return false}
  // ff = (HALF_LIFE_PERIOD / Math.log(2))
  // ss = Math.log(activity / MODERN_ACTIVITY)
  // console.log(ff, ss)
  return Math.ceil((HALF_LIFE_PERIOD / Math.log(2)) * (-Math.log(activity / MODERN_ACTIVITY)))
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// a = "15.1"
// console.log(dateSample(a))

module.exports = {
  dateSample
};
