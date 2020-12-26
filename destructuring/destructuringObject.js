const person = {
    name: 'Daniel',
    lastName: 'Armas',
    age: 18,
}

const { name, age } = person;
console.log(name, age);
//En objetos es importante que para destructuración la variable se llame igual que la propiedad, sino devuelve undefined