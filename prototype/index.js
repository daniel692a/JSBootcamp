//Objeto literal
const snoopy = {
    name: 'Snoopy',
    gener: 'Male',
    sound() {
        console.log('Guaauuu, guauuu');
    }
}
const lolaBunny = {
    name: 'Lola Bunny',
    gener: 'Female',
    sound() {
        console.log('I like carrots');
    }
}
//Crear varios objetos literales con las mismas propiedades, es tardado, por eso es mejor usa una función constructora
//Función Constructora
function Animal(name, gener){
    //Usó this para referirme al contexto del objeto que se va a crear a partir de esta función
    //Atributos
    this.name = name;
    this.gener = gener;
    //Métodos
    this.sound = function(){
        console.log("I'm alive");
    }
}

//Instanciar
const snoopy1 = new Animal('Snoopy', 'Male');
const lolaBunny1 = new Animal('Lola Bunny', 'Female');
console.log(snoopy1);
console.log(lolaBunny1);
//Si agregó las funciones a la función constructura, me va a crear por cada instancia esas funciones, haciendo pérdidas de memoria, por lo cuál es mejor sacar los métodos
//Para las funciones constructuras es ideal y recomendado tener adentro sólo los atributos y los métodos debes dejarlos afuera, usando prototype
function AnimalCr(name, gener){
    //Atributos
    this.name = name;
    this.gener = gener;
}
//Métodos
AnimalCr.prototype.greeting = function(){
    console.log(`Hi, my name is ${this.name}`);
}

const snoopy2 = new AnimalCr('Snoopy', 'Male');
const lolaBunny2 = new AnimalCr('Lola Bunny', 'Female');
console.log(snoopy2);
console.log(lolaBunny2);
snoopy2.greeting();
lolaBunny2.greeting();