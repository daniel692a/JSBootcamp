//El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
const values = [1, 2, 3, 3, 2];
const filterValues = new Set(values);//->Devuelve un objeto de tipo SET eliminando valores duplicados
console.log(values);
console.log(filterValues);
//Saber cuantos elementos tiene
console.log(values.length);
console.log(filterValues.size);
//Añadir
values.push(9);
filterValues.add(10);

console.log(values);
console.log(filterValues);

//Borrar
filterValues.delete(10);
console.log(filterValues);
//Ver si tiene cierto elemento
console.log(filterValues.has(2));
//Convertir a un arreglo
let arr = Array.from(filterValues);
console.log(arr);
//Borrar todo sus elementos
filterValues.clear();
console.log(filterValues);