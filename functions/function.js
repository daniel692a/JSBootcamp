//Declared
function numbers() {
    console.log("One");
    console.log("Two");
    console.log("Three");
}

//Invocation
numbers();
numbers();

//Return
function greeeting() {
    //When the compiler read a return, finish the function
    //return 'Bye';
    let name = 'Daniel';
    return `Hello ${name}`;
}

console.log(greeeting());

function hi(name="user", age=0){
    return `Heljo ${name}, your age is ${age}`;
}

console.log(hi("Daniel", 18));

//Expressed

age(18);

function age(age=0){
    console.log(`Your age is ${age}`);
}


const lastName = function() {
    console.log("Hello Armas");
}

lastName();