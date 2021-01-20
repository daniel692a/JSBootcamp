//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const reverseString = (str = '') => {
    if (typeof str !== 'string'){
        return 'Invalid data';
    } else {
        let noSpaces = str.replace(' ', '');
        let reverse = noSpaces.split('').reverse().join('');
        let result = (noSpaces === reverse) ? 'Es un palíndromo' : 'No es un palíndromo';
        return result;
    }
}

console.log(reverseString('reconocer'));
console.log(reverseString('hola'));
console.log(reverseString('luz azul'));
console.log(reverseString(3));