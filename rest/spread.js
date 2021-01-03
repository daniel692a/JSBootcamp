//Con esos tres puntos ... le decimos a la función que puede recibir parámetros infinitos, todo esto se almacena en un array
function add( a, b, ...c){
    let result = a + b;
    c.forEach(function(e){
        result += e;
    })
    return result;
}
console.log(add(1, 2, 3, 4, 5));


const array1 = [1, 2, 3, 4, 5], array2 = [6, 7, 8, 9, 10];
//Los juntamos en uno solo
const array3 = [...array1, ...array2];
console.log(array3);