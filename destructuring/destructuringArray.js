//Sin destructuración
const numbers = [1, 2, 3];
let one = numbers[0], two = numbers[1], three = numbers[2];
console.log(one, two, three);

const [o, t, th] = numbers;
console.log(o, t, th);
//La asignación de valor en destructuración se hace por orden
//No importa el nombre de las variables en destructuración