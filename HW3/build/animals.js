'use strict';

/*
 * To get some practice with basic OOP in JavaScript, we'll be creating a
 * virtual zoo in this file. You'll need to write three constructor functions
 * from scratch: Kangaroo, Wallaby , and Dingo (this is an Australian zoo).
 */

/******************************************************************************
***************                Kangaroo                     *******************
******************************************************************************/
/*
 * First up is Kangaroo. Kangaroos are well known for their hopping, and so we
 * will keep track of a hopCount variable for each Kangaroo we create. We will
 * also define a hop() method, which should print the string 'hop!' and
 * increment the hopCount.
 *
 * The kangaroo constructor does not take any arguments. When you finish this
 * class, the following code should work.
 */

var Kangaroo = function Kangaroo() {
  this.hopCount = 0;
};

Kangaroo.prototype.hop = function () {
  this.hopCount++;
  console.log('hop!');
};

var jack = new Kangaroo();
console.log(jack.hopCount); // 0
jack.hop(); // hop!
jack.hop(); // hop!
console.log(jack.hopCount); // 2

/******************************************************************************
***************                Wallaby                      *******************
******************************************************************************/
/*
 * Next up is the Wallaby. Wallabies are quite similar to Kangaroos, just a bit
 * smaller. They also have a hopCount, a hop method (which is exactly the same
 * as a Kangaroo), and a constructor that takes no arguments. Again, the
 * following code should work after you complete this class.
 *
 */

var Wallaby = function Wallaby() {
  this.hopCount = 0;
};

Wallaby.prototype.hop = function () {
  this.hopCount++;
  console.log('hop!');
};

var wally = new Wallaby();
console.log(wally.hopCount); // 0
wally.hop(); // hop!
wally.hop(); // hop!
console.log(wally.hopCount); // 2

/******************************************************************************
***************                 Dingo                       *******************
******************************************************************************/
/*
 * Finally, it's time to implement the Dingo class. Dingoes are very different
 * from Kangaroos or Wallabies; rather than hopping, Dingos are known for
 * eating things. They can also come in all different colors.
 *
 * Concretely, the constructor function of the Dingo will take in a color (as a
 * string). You will then implement two methods: getColor and eat. getColor
 * will just return the color, and eat will take in an `item` argument (string)
 * and print 'Dingo ate my {item}!'
 *
 */

var Dingo = function Dingo(color) {
  this.color = color;
};

Dingo.prototype.getColor = function () {
  return this.color;
};

Dingo.prototype.eat = function (item) {
  console.log('Dingo ate my ' + item + '!');
};

var davy = new Dingo('red');
console.log(davy.getColor()); // red
davy.eat('baby'); // Dingo ate my baby!

/******************************************************************************
***************               isMarsupial                   *******************
******************************************************************************/
/*
 * Finally, let's write a quick function that uses instanceof to check if an
 * animal is a marsupial. Among our three animals, Kangaroo and Wallaby are
 * marsupials, while a Dingo is not. If an unknown animal is encountered, you
 * should throw an error with the message 'Animal not recognized'.
 */

var isMarsupial = function isMarsupial(name) {
  if (name instanceof Kangaroo || name instanceof Wallaby) {
    return true;
  } else if (name instanceof Dingo) {
    return false;
  } else {
    throw new Error('Animal not recognized');
  }
};

console.log(isMarsupial(jack)); // true
console.log(isMarsupial(wally)); // true
// console.log(isMarsupial(davy)); // false
// This next line should throw an error
// console.log(isMarsupial({type: 'kookaburra'}));

module.exports = {
  Kangaroo: Kangaroo,
  Wallaby: Wallaby,
  Dingo: Dingo,
  isMarsupial: isMarsupial
};