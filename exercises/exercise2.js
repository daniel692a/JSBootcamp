//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function cutText(str = "", limit = 1){
    let result = (typeof str === "string") ? str.slice(0, limit) : 'Invalid Data';
    return result;
}

console.log(cutText('Hola Mundo', 6));
console.log(cutText(2));