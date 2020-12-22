//while
let c = 0;
while (c < 10) {
    console.log(c);
    c++;
}
//do-while
let i = 0;
do{
    console.log(i);
    i++;
}while(i < 10);

//for
for(let i = 0; i < 10; i++){
    console.log(i);
}

//for in -> Recorrer Objetos
const dan = {
    name : 'Daniel',
    lastName : 'Armas',
    age: 18
};
for (const key in dan) {
    console.log(`${key} : ${dan[key]}`);
}

let numbers = [10,20,30,40,50,60,70,80,90,100];

for (const i of numbers) {
    console.log(i);
}

const encode = (str) => {
    let encr = '';
    for (const i of str) {
        encr += encr + i.charCodeAt(0).toString(2);
    }
    return encr;
}

let hello = 'Hello World!';
for (const i of hello) {
    console.log(i);
}

console.log(encode('hey'));