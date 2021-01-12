//Las clases no reciben paámetros
class Animal{
    //Para recibir paámetros existe el método constructor
    //Se ejecuta al instanciar la clase
    constructor(name, gener){
        this.name = name;
        this.gener = gener;
    }

    //Métodos
    //Si pueden recibir parámetros
    //No es necesario sacar los métodos como lo es en las funciones constructoras
    sound(){
        console.log(`I make sounds because I'm alive`);
    }
    greeting(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

const pipo = new Animal('Pipo', 'Male'), kitty = new Animal('Kitty', 'Female');
console.log(pipo);
console.log(kitty);
pipo.sound();
//Heredar
class Dog extends Animal {
    constructor(name, gener, size, race){
        //Con el método super llamó al constructor pero de la clase padre
        super(name, gener);
        this.size = size;
        this.race = race;
    }
    //Sobreescritura de métodos
    sound() {
        console.log(`I'm a dog and I can bark`);
    }
    //Nuevo método
    bark() {
        console.log(`Guauuu guauuu`);
    }
    //Métodos estáticos: son aquellos que podemos acceder sin necesidad de instanciar
    static youAre(){
        console.log(`I'm man's best friend`);
    }
    //Métodos setter y getters -> permiten establecer y obtener atributos de la clase
    get getRace(){
        return this.race;
    }
    set setRace(race){
        this.race = race;
    }
}

//el método youAre es estático por lo que puedo acceder sin crear un objeto
Dog.youAre();
class Cat extends Animal{
    constructor(name, gener, size){
        super(name, gener);
        this.size = size;
    }
    sound() {
        console.log(`I'm a cat and I can meow`);
    }
    meow() {
        console.log(`Miauuu miauu`);
    }
}

const pipo2 = new Dog('Pipo', 'Male', 'Medium');
const kitty2 = new Cat('Kitty', 'Female', 'Small');
console.log(pipo2);
pipo2.sound();
console.log(kitty2);
//Los settters y getters en js se trabajan como propiedades, no como funciones, por lo tanto
console.log(pipo2.getRace);
pipo2.setRace = 'Cocker';
console.log(pipo2.getRace);