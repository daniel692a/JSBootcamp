//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const countVowels = (str) => {
    str = str.toLowerCase();
    const vowels = str.match(/[aeiouäëïöüáéíóúáéíóúâêîôûàèìòù]/ig).length;
    const consonants = str.match(/[bcdfghjklmnñpqrstvwxyz]/ig).length;
    return `Vocales: ${vowels}\nConsonantes: ${consonants}`;
}

console.log(countVowels('Hola Mundo'));
console.log(countVowels('Daniel Armas Ramírez'));
console.log(countVowels('Estaría muy feliz el pingüino'));