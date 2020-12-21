//if - else
let edad = prompt("Ingresa tu edad");
if(edad >= 18){
    alert("Eres mayor de edad");
} else {
    alert("Eres menor de edad");
}

//if - else if - else
let time = prompt("Igrese la hora");
if (time < 6){
    alert("Dejame dormir");
} else if(time > 5 && time <= 11){
    alert("Buenos dias");
} else if(time > 11 && time <= 18){
    alert("Buenas tardes");
} else{
    alert("Buenas noches");
}

//Operador Ternario
//(condicion) ? true : false
let age = (edad >= 18)?'Eres mayor de edad':'Eres menor de edad';
console.log(age);

//Switch
let day = prompt("Ingrese un numero de 1 al 7");
switch (day) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("No existe esa opción");
        break;
}