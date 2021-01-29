//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const averageArray = (array = [ 1, 2, 3, 4, 5]) =>{
    let sum = 0, average = 0;
    array.forEach((e) => sum += e);
    average = sum / array.length;
    return average;
}

console.log(averageArray([9,8,7,6,5,4,3,2,1,0]));
console.log(averageArray([9,8,7,6,5,8,7,8,8,6]));