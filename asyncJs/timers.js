//Se ejecuta una sola vez
console.log('Inicio');
setTimeout(() => {
    console.log('Hola Mundo');
}, 1000);
//Se ejecuta infinitas veces
setInterval(() =>{
    console.log(new Date().toLocaleTimeString());
}, 1000);
//Puedo cancelarlos con clearTimeout, pero debo usar una variable
let message = setTimeout(() =>{
    console.log('Hola Mundo');
}, 1000);
clearTimeout(message);

let interval = setInterval(() =>{
    console.log('Holi');
}, 1000);
clearInterval(interval);