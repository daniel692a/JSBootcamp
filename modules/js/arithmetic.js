//Puedo exportar por default
export default function add(a, b){
    console.log(a + b);
}
//Sólo se puede hacer un export default
export function subtract(a, b){
    console.log(a - b);
}