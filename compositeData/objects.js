const b = {}
const c = new Object();
// Dentro de un objeto a las variables se llaman atributos/propiedades
//Las funciones se llaman métodos
const dan = {
    name: 'Daniel',
    lastName: 'Armas',
    age: 18,
    hobbies: ['Music', 'Videogames', 'Technologies'],
    contact: {
        email: 'daniel62armas@gmail.com',
        twitter: '@daniel692',
        cellphone: '217327'
    },
    greeting: function() {
        console.log("Hello 😃");
    },
    sayMyName: function(name) {
        console.log(`Hi, my name is ${name} ${this.lastName}, I have ${this.age} years old`);
    }
};

console.log(dan.name);
console.log(dan['name']);

console.log(dan.lastName);
dan.greeting();
console.log(dan.contact.twitter);
dan.sayMyName('Sandy');
console.log(Object.keys(dan));
console.log(Object.values(dan));
//Dentro de mi objeto revisará si existe esa propiedad y me devolverá un boolean
console.log(dan.hasOwnProperty('age'));
console.log(dan.hasOwnProperty('born'));