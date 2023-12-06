const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    // throw new Error("Unable to determine the time of year!");
    return "Unable to determine the time of year!"
    // console.log(date, "==", month)
  }
  // console.log(new Date(date), String(new Date(date)) === "Invalid Date")
  if(String(new Date(date)) === "Invalid Date") {
    // throw new Error("Invalid Date");
  }
  month = (date.getMonth() + 1) % 12
  if (month <3) {return "winter"}
  if (month <6) {return "spring"}
  if (month <9) {return "summer"}
  if (month <12) {return "fall"}

  return "ERROR"
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

// console.log(getSeason(new Date(2020, 01, 30))) // => 'spring'

// const [
//   winter,
//   spring,
//   summer,
//   autumn,
// ] = [
//       new Date(2019, 11, 22, 23, 45, 11, 500),
//       new Date(2018, 4, 17, 11, 27, 4, 321),
//       new Date(2017, 6, 11, 23, 45, 11, 500),
//       new Date(1994, 8, 26, 3, 0, 11, 500),
//   ];
// console.log(getSeason(winter)) //, 'winter')
// console.log(getSeason(spring)) //, 'spring');
// console.log(getSeason(summer)) //, 'summer');
// console.log(getSeason(autumn)) //.to.match(/autumn|fall/);

console.log(getSeason("fdo"))






module.exports = {
  getSeason
};
