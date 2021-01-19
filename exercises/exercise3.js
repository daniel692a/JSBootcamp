//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function cutText(str = '', char = '') {
    let result = (typeof str === 'string') ? str.split(char) : 'Invalid data';
    return result;
}

console.log(cutText('hola que tal', ' '));
console.log(cutText('daniel'));