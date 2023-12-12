const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct=true) {
    this.direct = direct
  }
  encrypt(phrase, key) {
    // console.log(arguments)
    // if (arguments.length !== 2 && arguments.every(e => typeof e === "string")) {
    //   throw new Error("Incorrect arguments!");
    // }
    this.checkArg(arguments)
    let result = ""
    let j = 0
    for (let i = 0; i < phrase.length; i++) {
      let char = phrase[i].toLowerCase()
      if (!this.isAlpha(char)) {
        result += char
      } else {
        let openCode = char.charCodeAt() - 97
        let keyCode = key[j % key.length].toLowerCase().charCodeAt() - 97
        let closeCode = (openCode + keyCode) % 26
        let closeChar = String.fromCharCode(closeCode + 97)

        console.log("==>", j , j%key.length, key[j % key.length])
        console.log(openCode, keyCode, closeCode)
        console.log(char, "---", closeChar)
        result += closeChar.toUpperCase()
        j += 1
      }
    }
    return (this.direct) ? result : result.split("").reverse().join("")
    // throw ne`w NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(phrase, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code 
    // if (arguments.length !== 2 && arguments.every(e => typeof e === "string")) {
    //   throw new Error("Incorrect arguments!");
    // }
    this.checkArg(arguments)
    let result = ""
    let j = 0
    for (let i = 0; i < phrase.length; i++) {
      let closeChar = phrase[i].toLowerCase()
      if (!this.isAlpha(closeChar)) { 
        result += closeChar
      } else {
        let closeCode = closeChar.charCodeAt() - 97
        let keyCode = key[j % key.length].toLowerCase().charCodeAt() - 97
        let openCode = (26 + closeCode - keyCode) % 26
        let char = String.fromCharCode(openCode + 97)
        
        // console.log(closeCode, keyCode, openCode)
        // console.log(closeChar, "---", char)
        result += char.toUpperCase()
        j += 1
      }
    }
    return (this.direct) ? result : result.split("").reverse().join("")
  }
  isAlpha(char) {
    return (/([a-zA-Z])/.test(char))
  }
  checkArg(arg) {
    if (arg.length !== 2) {
      throw new Error("Incorrect arguments!");
    }
    for (let i = 0; i < arg.length; i++) {
      if(typeof arg[i] !== "string") {
        throw new Error("Incorrect arguments!");
      }
    }
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse')) // => 'AEIHQX SX DLLU!'
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) // => 'ATTACK AT DAWN!'
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse')) // => '!ULLD XS XQHIEA'
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')) // => '!NWAD TA KCATTA'

// console.log(directMachine.encrypt('lala'))
// console.log(directMachine.encrypt(undefined, 'key'))
// console.log(directMachine.encrypt())
// console.log(reverseMachine.encrypt('lala'))
// console.log(reverseMachine.encrypt(undefined, 'key'))
// console.log(reverseMachine.encrypt())
// console.log(directMachine.decrypt('lala'))
// console.log(directMachine.decrypt(undefined, 'key'))
// console.log(directMachine.decrypt())
// console.log(reverseMachine.decrypt('lala'))
// console.log(reverseMachine.decrypt(undefined, 'key'))
// console.log(reverseMachine.decrypt())
console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey')) //, 'KAYIWIAMMOUIW')
// console.log(directMachine.encrypt('Same length key', 'Samelengthkey')) //, 'KAYI WIAMMO UIW')

module.exports = {
  VigenereCipheringMachine
};
