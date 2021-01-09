//Función Constructora
function Animal( name, gener ){
    this.name = name;
    this.gener = gener;
}
//Los métodos los sacamos para mejorar performance
Animal.prototype.greeting = function(){
    console.log(`Hello, my name is ${this.name}`);
}
Animal.prototype.sound = function(){
    console.log(`Hago sonidos porque estoy vivo`);
}
//Herencia Prototípica
//La palabra clave super es usada para acceder y llamar funciones del padre de un objeto, en este caso accedemos a la función Animal
function Dog(name, gener, size){
    this.super = Animal;
    this.super(name, gener);
    this.size = size;
}
//Lo que hacemos es que el prototype de el perro se instancie de la función constructura de Animal
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
//El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

//Sobreescritura de Métodos
Dog.prototype.sound = function(){
    console.log(`Soy un perro y mi sonido es un ladrido`);
}
Dog.prototype.bark = function(){
    console.log(`Guuuauu guauuu`);
}

function Cat(name, gener, eyesColor){
    this.super = Animal;
    this.super(name, gener);
    this.eyesColor = eyesColor;
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

Cat.prototype.sound = function(){
    console.log(`Soy un gato y maullo`);
}
Cat.prototype.meow = function(){
    console.log(`Miauu miauu`);
}

const snoopy = new Dog('Snoopy', 'Male', 'Medium');
const lolaBunny = new Animal('Lola Bunny', 'Female');
const rufus = new Cat('Rufus', 'Male', 'Green');

console.log(snoopy);
console.log(lolaBunny);
console.log(rufus);

snoopy.bark();
snoopy.sound();
rufus.sound()
rufus.meow();
