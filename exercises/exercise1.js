//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
function lengthString(str = "") {
    let result = (typeof str === "string") ? str.length : 'Invalid data';
    /*if (typeof str === 'string') {
        return `Length of string is ${str.length}`;
    }else {
        return 'Invalid data: is not a string';
    }*/
    return result;
}

console.log(lengthString('Hola Mundo'));
console.log(lengthString(1));
console.log(lengthString({}));
console.log(lengthString('Daniel'));