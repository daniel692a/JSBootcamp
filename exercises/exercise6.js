//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function countWords ( str = '', word = '' ) {
    let rexExp = new RegExp(word, 'ig');
    return str.match(rexExp).length;
}

console.log(countWords('hola mundo adios mundo', 'mundo'));