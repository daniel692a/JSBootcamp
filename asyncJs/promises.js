function squarePromise(value) {
    setTimeout(()=>{
        (value, value*value);
    }, 0 | Math.random() * 1000);
}