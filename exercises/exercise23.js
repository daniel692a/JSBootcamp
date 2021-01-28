//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
const oddAndEven = (numbers= [ 1, 2, 3, 4, 5 ]) => {
    const evenNumbers = [];
    const oddNumbers = [];
    numbers.forEach((e) =>{
        if(e%2 === 0){
            evenNumbers.push(e);
        }else{
            oddNumbers.push(e);
        }
    })
    return `Pares: ${evenNumbers.join(', ')}\nImpares: ${oddNumbers.join(', ')}`;
}

console.log(oddAndEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(oddAndEven([13, 18, 34, 21]));