var exercise = require('./exercises');


var pricesObject = {
    eggs: 2.50,
    milk: 3.00,
    bread: 2.75,
    orangeJuice: 4.25,
    chocolate: 3,
    flower:4
};

var cart = {
  eggs: 0,
  chocolate: 3,
    milk:0,
    flower:2,
  prices: pricesObject,
    hasChocolate: exercise.cartMixins.hasChocolate,
    hasEggs: exercise.cartMixins.hasEggs,
   //hasMilk:  exercise.cartMixins.hasItemMixin('milk'),
   //  hasFlowers: exercise.cartMixins.hasItemMixin('flower'),
  getTotalPrice: exercise.cartMixins.getTotalPrice,
  getSalePrice: exercise.cartMixins.getSalePrice
};


map = exercise.hofs.map;
filter = exercise.hofs.filter;
reduce = exercise.hofs.reduce;
reduceRight = exercise.hofs.reduceRight;
function makeUpperCase(str) {
    return str.toUpperCase();
}
function check(item) {
    return typeof item === 'number';
}
var arr = ['abc', 'def', 'ghi'];
var a = [1,'2',3,'1'];
var ARR = map(arr, makeUpperCase);
var add = filter(a,check);
//console.log(add); // -> ['ABC', 'DEF, 'GHI']

var res = reduceRight([1, 2, 3], function(previousValue, currentValue){
    return previousValue * currentValue + 1;
}, 1);
//console.log(res);


sum = exercise.arrayMethods.sum;
duplicate = exercise.arrayMethods.findDuplicates;
remove = exercise.arrayMethods.remove;

var array = ['1','1',1,2,3,4,3,3,3,3,5,'a',[1,2,3]];
//console.log(remove(array,3));


stringify = exercise.stringify;

 console.log(stringify(undefined));


// console.log(cart.hasChocolate());
//  console.log(cart.getTotalPrice());
//  console.log(cart.getSalePrice());
// console.log(cart.hasEggs());
