let t = true;
let f = Boolean(false);
console.log(t, f);
console.log(typeof t, typeof f);


//Falsy
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

//Truthy
console.log(Boolean(-7));
console.log(Boolean(" "));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean([]));