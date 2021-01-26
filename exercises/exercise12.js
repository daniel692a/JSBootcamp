//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primeNumber = number => {
    let count = 0;
    for(let i = 0; i <= number; i++) {
        if(number%i === 0){
            count++;
        }
    }
    return count > 2 ? 'Es compuesto' : 'Es primo';
}

console.log(primeNumber(97));
console.log(primeNumber(93));
console.log(primeNumber(89));