const add = require('./local');

console.log("I am form Node.js");

const sum = add(2,3);
const sum2 = add(3,3);
console.log(sum)
console.log(sum2)

// console.clear()
require('./moduleSchope/batman')
require('./moduleSchope/superMan')

console.clear()
const superHero = require('./moduleCaching');
console.log(superHero.getname());
superHero.setName("Iron Man");
console.log(superHero.getname());
