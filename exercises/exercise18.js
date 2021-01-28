//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const countVowels = (str) => {
    str = str.replace(' ', '');
    const vowels = str.match(/[aeiouAEIOUäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]/ig).length;
    const consonants = str.length - vowels;
    return `Vocales: ${vowels}\nConsonantes: ${consonants}`;
}

console.log(countVowels('Hola Mundo'));
console.log(countVowels('Daniel Armas Ramírez'));
console.log(countVowels('Estaría muy feliz el pingüino'));