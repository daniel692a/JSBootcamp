let currentDate = new Date();
console.log(currentDate);
console.log(currentDate.getDate()); //Nos da el día del mes
//Día de la semana
//Los maneja como arrays donde Domingo es el día 0
console.log(currentDate.getDay());
//Mes del año
//También se manejan como arrays, por lo que Enero es el mes 0
console.log(currentDate.getMonth());
//Obtener el año
console.log(currentDate.getYear());//No es recomendado debido a que cuenta a partir de 1900
console.log(currentDate.getFullYear());//Es recomendado

//Horas
console.log(currentDate.getHours());
//Minutos
console.log(currentDate.getMinutes());
//Segundos
console.log(currentDate.getSeconds());
//Milisegundos
console.log(currentDate.getMilliseconds());
//Formatos de Fecha
console.log(currentDate.toLocaleString()); //día/mes/año hora:minuto:segundo
console.log(currentDate.toLocaleDateString()); //día/mes/año
console.log(currentDate.toLocaleTimeString()); //hora:minuto:segundo
console.log(currentDate.getTimezoneOffset()); //Obtiene la diferencia de segundos entre la zona que se encuentra y la UTC
//UTC - Meridiano de Greenwich
console.log(currentDate.getUTCDate()); //Fecha en el meridiano de Greenwich
console.log(currentDate.getUTCHours()); //Horas en el meridiano de Greenwich

//Timestamp -> comienza del 1 de enero de 1980
console.log(Date.now()); //Nos da el tiempo en segundos transcurrido desde el timestamp
let birthdayDaniel = new Date(2002, 8, 9);
console.log(birthdayDaniel);