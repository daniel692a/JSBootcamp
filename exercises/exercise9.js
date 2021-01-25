//9 Programa una función que obtenga un numero aleatorio entre 501 y 600.
const rangeRandomNumber = (start= 501, end = 600) => Math.round(Math.random() * (end-start)+ start);

alert(rangeRandomNumber());