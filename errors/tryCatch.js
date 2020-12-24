try {
    //Código a evaluar
    console.log("Init");
    ember+1;
} catch (error) {
    console.error(error);
    //Captura el error que suceda en try
} finally {
    //Se ejecuta después de pasar por try-catch
    console.log("Terminamos uwu");
}

try {
    let number = 13;
    if( isNaN(number) ){
        throw new Error("Es NaN");
    }
    //Lanzar mis propios errores por throw
    console.log(number * number);
} catch (error) {
    console.error(error);
}

var e = new Error("Error de tipo de dato");
let str = 'hola';
if( isFinite(str)){
    throw e;
}