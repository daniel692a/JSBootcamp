//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const dateCalculator = (date = new Date()) => {
    let currentDate = new Date();
    return `Existen ${currentDate.getFullYear() - date.getFullYear()} años de diferencia`;
}

console.log(dateCalculator(new Date(1984, 4, 23)));
console.log(dateCalculator(new Date(2002, 9, 6)));