function squareCallback(value, callback) {
    setTimeout(()=>{
        callback(value, value*value);
    }, 0 | Math.random() * 1000);
}
//Callback Hell
//Cada uno se va a ejecutar a tiempo diferente por el setTimeout
squareCallback(0, (value, result) =>{
    console.log(`Callback: ${value}, ${result}`);
    squareCallback(1, (value, result) =>{
        console.log(`Callback: ${value}, ${result}`);
        squareCallback(2, (value, result) =>{
            console.log(`Callback: ${value}, ${result}`);
        });
    });
});
//Si tengo esto, lo que hará es primero mostrar este squareCallback, y después los de arriba
squareCallback(3, (value, result) =>{
    console.log(`Callback: ${value}, ${result}`);
})