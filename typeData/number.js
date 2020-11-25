let a = 5;
let b = new Number(2);
let c = 7.19;
let d = "5.6";
//Decimals
console.log(c.toFixed(1));
console.log(c.toFixed(5));

//parseInt
console.log(parseInt(c));

console.log(c + d);
//Add part Int of d
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
//Constructor
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));