function squarePromise(value) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
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

const asyncAwaitPromise = async() => {
    try {
        let invocation = await squarePromise(0);
        console.log(`Result: ${invocation.result}`);
        invocation = await squarePromise(1);
        console.log(`Result: ${invocation.result}`);
        invocation = await squarePromise('hola');
        console.log(`Result: ${invocation.result}`);
    } catch(error) {
        console.error(error);
    }
}

asyncAwaitPromise();