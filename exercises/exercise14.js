//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const conversionGrades = (grades = '0', metrics = 'C') => {
    metrics = metrics.toUpperCase();
    if ( metrics === 'C') {
        return ((grades * 1.8) + 32);
    } else if (metrics === 'F') {
        return ((grades - 32)/ 1.8);
    } else {
        return 'Not available';
    }
}

console.log(conversionGrades(0, 'C'));
console.log(conversionGrades(34, 'f'));