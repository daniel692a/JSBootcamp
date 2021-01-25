//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const numberCapicua = number => {
    let reverseNumber = parseInt(number.toString().split('').reverse().join(''));
    return (reverseNumber === number) ? 'Es capicúa' : 'No es capicúa';
}

alert(numberCapicua(2002));
alert(numberCapicua(300));
alert(numberCapicua(302));
alert(numberCapicua(303));