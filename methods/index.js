//alert
//Abre una ventana con un mensaje
alert('Welcome user');
let greeting = alert('Hi');
console.log(greeting);//->Si lo almacenamos en variable, su valor siempre será undefined

//confirm
//Nos muestra un mensaje con posibilidad de aceptar o cancelar
confirm('Are you sure?');
let confirmMessage = confirm('Are you sure?');
console.log(confirmMessage);//->Si lo almacenamos en variable, su valor será true si damos aceptar, o false si cancelamos

//prompt
//Nos muestra un mensaje y permite ingresar valores en un campo
prompt('Enter your name:');
let name = prompt('Enter your name:');
console.log(name);//->Almacena el valor que ingrese, pero si doy cancelar, devuelve null
