console.log('Hola');
console.error('Error');
console.warn('Aviso');
console.info('Dar información');
console.log('Dar un registro de la app');

let name = 'Daniel', lastName = 'Armas', age = 18;

console.log(`Hi, my name is ${name} ${lastName} and my age is ${age}`);
console.log(`Hi, my name is %s %s and my age is %d`, name, lastName, age);
//Limpiar la consola
console.clear();

//Para ver mejor los atributos de un objeto se usa dir
console.log(document);
console.dir(document);

//Podemos hacer grupos
console.group('Web Technologies');
console.info('Javascript');
console.info('Typescript');
console.info('Node.js');
console.info('CSS');
console.info('HTML');
console.groupEnd();

console.groupCollapsed('Web Technologies');
console.info('Javascript');
console.info('Typescript');
console.info('Node.js');
console.info('CSS');
console.info('HTML');
console.groupEnd();

//Se puede mostrar tablas
console.table(Object.entries(console));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.table(numbers);

//Con estilos
console.log('%cHolii', 'font-size: 3em; color: red; font-family: Verdana;')

//Temporizadores, debes usar el mismo mensaje
console.time('Duration: ');
const array = Array(1000);
for(i of array){
    array[i] = i;
}
console.timeEnd('Duration: ');

//Método para contar -> count
for(let i = 0; i <= 10; i++) {
    console.count('For: ');
    console.log(i);
}

//Para hacer un pequeño testing
let x = 4, y = 3, message = 'x must be less than y';

console.assert(/*Condition*/ x < y, /*Variables*/ { x, y , message });