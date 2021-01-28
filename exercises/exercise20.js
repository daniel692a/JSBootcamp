//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const testEmails = (email = 'hola@example.com') => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

console.log(testEmails('jonmircha@gmail.com'));
console.log(testEmails('daniel62armas@gmail.com'));
console.log(testEmails('hola@ag.c'));