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
  // console.log((typeof date === "object"))
  // console.log(String(new Date(date)) === "Invalid Date")
  if((String(new Date(date)) === "Invalid Date") || (typeof date !== "object")) {
    // console.log("==ERROR==")
    throw new Error("Invalid date!");
  }
  // console.log("have JSON", (new Date).toJSON, date.toJSON, (new Date).getDay !== date.getDay )
  if ((new Date).getDay !== date.getDay) {
    throw new Error("Invalid date!");
  }
  try {
    month = (date.getMonth() + 1) % 12  
  } catch (e) {
    // console.log("==ERROR==", e.name)
    if (e.name == "TypeError") {
      throw new Error("Invalid date!");
    } else {
      throw e;
    }
  }
  // month = (date.getMonth() + 1) % 12

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

// console.log(getSeason("fdo"))
// console.log(getSeason('foo'))
// console.log(getSeason({ John: 'Smith' }))


// console.log(getSeason(20192701))
// console.log(getSeason([2019, '27', 0 + '1']))
// console.log(getSeason(() => new Date()))


// const fakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log(getSeason(fakeDate))
//], 'Invalid date!');


// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// console.log(getSeason(deeperFakeDate))
//], 'Invalid date!');

// Object.prototype.hasOwnProperty("toJSON")
module.exports = {
  getSeason
};
