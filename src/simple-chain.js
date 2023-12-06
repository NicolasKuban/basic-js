const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length
  },
  addLink(value="") {
    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if ((typeof position !== "number") || (position - 1 < 0 || (position - 1 >= this.chain.length))) {
      this.chain = []
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    result = this.chain.join("~~")
    this.chain = []
    return result
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2))
// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))

// console.log(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain())
//, '( 3rd )~~( function () { } )');

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain()) // => '( 1 )~~( 2 )~~( 3 )'

// console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()) // => '( 2 )~~( 3 )'

// console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()) // => '( 2 )~~( 1 )~~( 3 )'

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink("r").finishChain())

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
// ( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

// console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
//, '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain())
// //, '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
// console.log(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain())
// //, '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');
// console.log(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain())
// //, '( NaN )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( true )');
// console.log(chainMaker.addLink(1).reverseChain().addLink(0).reverseChain().addLink(NaN).addLink(1.233).addLink(null).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).finishChain())
// //, '( [object Object] )~~( null )~~( 1.233 )~~( NaN )~~( 1 )~~( 0 )~~( [object Object] )');


module.exports = {
  chainMaker
};
