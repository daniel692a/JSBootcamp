//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
const testNames = (personName = '') => {
    const re = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/g;
    return re.test(personName);
}
console.log(testNames('Daniel Armas'));
console.log(testNames('Jonathan MirCha'));