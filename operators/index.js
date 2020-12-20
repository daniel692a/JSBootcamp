//Aritméticos: + - * / % ()
let a = 5 + 5;
let mod = 5 % 2;

//Relacionales: > < == !=
// >= <= === !==
// = ->Asignación de variable
// == ->Comparación de valores
// === -> Comparación de tipo de dato y de valor. (Recomendable y de buena práctica)

//Incremento o Decremento
let i = 2;
console.log(i += 3);
//i = i + 3;
i = 2;
console.log(i -= 3);
//i = i - 3;
i = 2;
console.log(i /= 3);
//i = i / 3;
i = 2;
console.log(i *= 3);
//i = i * 3;

//Operador Unario
let j = 2;
//j = j + 1;
console.log(j++);
j = 2;
console.log(j--);

//Lógicos
// ! -> Not
// || -> Or
// && -> And
console.log(!true) //->Imprime false
console.log(!false) //->Imprime true

console.log((9 === 9) || ("9" === 9));//->Será True porque una condición es verdadera, al menos una debe ser verdadera
console.log((9 === 9) || ("9" === 9));//->Todas las condiciones deben ser verdaderas para que retorne un True