const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  files = {}
  for (file of names) {
    if (file in files) {
      newName = `${file}(${files[file]})`
      files[newName] = 1
      files[file] += 1
    } else {
      files[file] = 1
    }
  }
  return Object.keys(files)
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


// a = ["file", "file", "image", "file(1)", "file"],
// console.log(renameFiles(a))


module.exports = {
  renameFiles
};
