//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
function reverseString(str='example') {
    var errorData = new Error('Invalid data');
    let result = (typeof str === "string") ? str.split("").reverse().join("") : errorData.message;
    return result;
}

console.log(reverseString('reconocer'));
console.log(reverseString('luz azul'));
console.log(reverseString(3));
