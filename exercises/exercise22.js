//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const sortNumbers = (numbers = [3, 2, 1]) => {
    numbers.sort((a, b) => a-b);
    const lastValue = numbers[numbers.length - 1];
    return `Valor más bajo: ${numbers[0]}\nValor más alto: ${lastValue}`;
}

console.log(sortNumbers([80, 83, 75, 21]));
console.log(sortNumbers([1, 4, 5, 99, -60]));