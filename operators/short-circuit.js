//Cortocircuito OR -> ||
//Si el valor de la izquierda tiende a verdadero, lo tomará y anulará el de la derecha
//Si el valor de la izquierda tiende a falso, tomará el valor de la derecha
function greeting(name){
    //Si no pasó el nombre durante la invocación será undefined, lo que es un falsy value, pero con el operador evito eso
    name = name || 'user';
    console.log(`%cHello ${name}`, 'font-size: 2em; color: red; font-weight: bold');
}

greeting('Daniel');
greeting();

//Cortocircuito AND -> &&
//Es contrario al OR, si el valor de la izquierda es falso, ese es el que tomará
console.log(false && 'Holap');
console.log(true && 'Hi');//->Si el valor de la izquierda no es falso, automaticamente el de la derecha se toma, no importa si es falso o verdadero