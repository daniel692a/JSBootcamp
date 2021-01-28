//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
var e = new Error('Invalid data');
const decimalToBinary = (number=100, base=2) => {
    return (typeof number !== 'number' || typeof base !== 'number') ? console.error(e) : (base === 2) ? parseInt(number, base) : number.toString(2);
}

console.log(decimalToBinary(100, 2));
console.log(decimalToBinary(4, 10));
console.log(decimalToBinary('hola', '2'));