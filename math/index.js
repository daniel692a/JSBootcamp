//Math es un objeto estático
console.log(Math);
//Incluye valores ya dados como PI o E
console.log(Math.PI);
console.log(Math.E);

//Valor absoluto
console.log(Math.abs(7.8));//->Nos devolverá 7.8 porque el valor absoluto es cantidad sin signo
console.log(Math.abs(-1.2))//->Nos devolverá 1.2

//Redondeo
console.log(Math.ceil(7.8));//->Es un redondeo hacia arriba, por lo que da 8
console.log(Math.ceil(7.2));//->Nos devolverá 8

console.log(Math.floor(7.8));//->Es un redondeo hacia abajo, por lo que da 7
console.log(Math.floor(7.2));//->Nos da 7

console.log(Math.round(7.8));//->Redondea de forma correcta, nos da 8
console.log(Math.round(7.2));//->Da 7

//Raíz Cuadrada
console.log(Math.sqrt(81));//->9
//Potencia
console.log(Math.pow(2, 4));//El primer valor es la base y el segundo es el exponente

//Un método para ver si es positivo, negativo o cero
console.log(Math.sign(-7));//->Nos devolverá -1
console.log(Math.sign(0)); //->Nos devolverá 0
console.log(Math.sign(8));//->Nos devolverá 1

//Números aleatorios
console.log(Math.random());//->Da un número aleatorio entre 0 y 1
console.log(Math.round(Math.random() * 40));//->Podemos hacer combinaciones para que nos de entre un rango