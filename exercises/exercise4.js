//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repeatString(str = ' ', replays = 1) {
    let result = (typeof str === "string") ? str.repeat(replays) : 'Invalid data';
    return result;
}

console.log(repeatString('Dan', 3));
console.log(repeatString(2, 5));