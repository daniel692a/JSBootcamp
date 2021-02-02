const ID = Symbol('AR');
const ID2 = Symbol('AR');
//Symbol es un tipo de dato cuyos valores son únicos e immutables
console.log(ID === ID2);//->Esto me da false por ser symbol

const NAME = Symbol('name');
const GREET = Symbol('greet');

const person = {
    //Para usar mi symbol, debo usar corchetes
    [NAME] : 'Daniel',
};
console.log(person);
person.lastName = 'Armas';
//Si se puede cambiar su valor
person[NAME] = 'Dan';
console.log(person);

person[GREET] = function(){
    console.log(`Hi`);
}
person[GREET]();
//Si los recorro por array, sólo me mostrará las que no sean symbol
for (const key in person) {
    console.log(key);
    console.log(person[key]);
}
//Si quiero visualizar las propiedades symbol, existe un método
console.log(Object.getOwnPropertySymbols(person));