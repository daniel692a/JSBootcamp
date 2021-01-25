//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = number => fact = (number === 1) ? 1 : number * factorial(number-1);

alert(factorial(5));
alert(factorial(8));