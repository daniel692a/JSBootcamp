//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const replacePattern = (str = '', pattern = '') =>{
    return str.replace(new RegExp(pattern, 'ig'), '');
}

console.log(replacePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
console.log(replacePattern('hola daniel, hola amigo', 'hola'));