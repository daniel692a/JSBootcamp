let name = "Rufus", age = 1;
const cat = {
    name: name,
    age: age,
    maullar: function(){
        console.log("Miauuuu");
    }
}

console.log(cat);
cat.maullar();

//Objeto literal
//Forma más sencilla y rápida para dar un atributo y propiedad
let nombre = "Pipo", edad = 2;
const dog = {
    nombre,
    edad,
    ladrar(){
        console.log('guauuu guauuuuu');
    }
}

console.log(dog);
dog.ladrar();