const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  result = {}
  for (let domain of domains) {
    key = ""
    // i = 0
    temp = domain.split(".")

    while (temp.length) {
      key = key.concat(".",temp.pop())
      if(key in result) {
        // console.log(obj.get(element))
        result[key] += 1
      } else {
        result[key] = 1
      }
      if (i>20) {break}
    }
    // i++;
    // console.log(key)
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  return result
}


// domains = [
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
//  ]
//  console.log(getDNSStats(domains))



module.exports = {
  getDNSStats
};
