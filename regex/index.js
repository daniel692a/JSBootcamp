//Expresiones regulares
let stringExample = 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adipiscing';
//El constructor recibe dos parámetros, donde uno es la búsqueda de caractere y el otro son banderas
let expReg = new RegExp('lorem', "ig");

console.log(expReg.test(stringExample));//->Devuelve un true o false
console.log(expReg.exec(stringExample));
//Es la manera más sencilla y aceptada de hacer expresiones regulares
//Las banderas van al último
expReg = /lorem/ig;

console.log(expReg.exec(stringExample));//Nos devuelve un arreglo con datos como posición y el input