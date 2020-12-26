const number = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i <number.length; i++){
    //break cierra el ciclo cuando se lo indiquemos
    if (i === 5){
        break;
    }
    console.log(number[i]);
}
for (let i = 0; i < number.length; i++) {
    //continue salta el valor o la ignora según indiquemos
    if (number[i] % 2 !== 0) {
        continue;
    }
    console.log(number[i]);
}