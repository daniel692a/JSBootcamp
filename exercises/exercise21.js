//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const squareArray = (numbers = [1, 2, 3]) => numbers.map(element => Math.pow(element, 2));

console.log(squareArray([1, 4, 5]));