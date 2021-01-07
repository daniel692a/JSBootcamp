//Función Anónima, solo puede ser declarada y después expresada
const greeting = function(){
    console.log('Hi');
}
greeting();
//Arrow Function
const bye = () => {
    console.log('Bye');
}
bye();
//Podemos hacerla más pequeña
const bye2 = () => console.log('Bye 2');
bye2();
//Los parámetros van en los paréntesis
const bye3 = (name) => console.log(`Bye ${name}`);
bye3('Daniel');
//Si sólo se da un parámetro podemos omitir los paréntesis
const bye4 = name => console.log(`Bye ${name}`);
bye4("Dani")

//Función Anónima
const add = function(a, b) {
    return a + b;
}
console.log(add(1, 45));
//Arrow functions
//Tenemos un return implícito -> es válido solo para 1 línea de código
//Se vuelve más expresivo
const add1 = (a, b) => a + b;
console.log(add1(12, 45));

//Son útiles en métodos
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((e, i)=> {
    console.log(`${e} en posicion ${i}`);
});
//Se puede hacer más corta
numbers.forEach((e, i) => console.log(`${e} en posicion ${i}`));

const dog = {
    name: 'Pipo',
    bark() {
        console.log(this);
    }
}
dog.bark();
const dog1 = {
    name: 'Pipo',
    bark: () => {
        console.log(this);
    }
}
dog1.bark();
//El contexto de las arrow function no captura al objeto, sino a Window, por eso se debe evitar usar en métodos