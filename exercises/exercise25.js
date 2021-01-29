//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const deleteDuplicates = ( array = [ 1 , 1, 2, 6, 7]) => {
    return array.filter((e, i) => array.indexOf(e) === i);
}

console.log(deleteDuplicates(["x", 10, "x", 2, "10", 10, true, true]));
console.log(deleteDuplicates([2, 2, 2, 2]));