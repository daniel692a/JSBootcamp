//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
var invalidData = new Error('Invalid data');
const isOdd = (number = 1) => {
    if(typeof number !== 'number'){
        return invalidData;
    } else {
        return (number % 2 === 0) ? 'Es par' : 'Es impar';
    }
}

console.log(isOdd(8));
console.log(isOdd(7));
console.log(isOdd('hola'));