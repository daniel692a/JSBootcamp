function squarePromise(value) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            //Resolve viene a ser el return en caso de que sea correcto
            resolve({
                value,
                result: value*value
            });
        }, 0 | Math.random() * 1000);
        if(typeof value !== 'number'){
            reject(`${value} is not a number`);
        }
    });
}
squarePromise(0)
//El then es para el siguiente bloque a ejecutar
.then(({value, result}) => {
    console.log(`Value: ${value}, result: ${result}`);
    return squarePromise(1);
})
.then(({value, result}) => {
    console.log(`Value: ${value}, result: ${result}`);
    return squarePromise(2);
})
.then(({value, result}) => {
    console.log(`Value: ${value}, result: ${result}`);
    return squarePromise(3);
})
.then(({value, result}) => {
    console.log(`Value: ${value}, result: ${result}`);
    return squarePromise('4');
})
.then(({value, result}) => {
    console.log(`Value: ${value}, result: ${result}`);
    return squarePromise(5);
})
.then(({value, result}) => {
    console.log(`Value: ${value}, result: ${result}`);
})
.catch((error) =>
    console.error(`Error: ${error}`)
);