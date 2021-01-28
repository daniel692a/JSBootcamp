//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
var e = new Error('Invalid data');
const discounts = (total = 100, discount = 10) =>
    (typeof total !== 'number' || typeof discount !== 'number') ?
        console.error(e) : (total <= 0 || discount < 0) ? console.error('Wrong values') : (total - ((discount * total) / 100));

console.log(discounts(1000, 20));
console.log(discounts(100, 23));
console.log(discounts(100, -23));
console.log(discounts('-100', '23'));