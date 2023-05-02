/*                       TIPOS DE NUMEROS            (sin funciones)
• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)                ***PAG. 55
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/

import * as rls from "readline-sync";

let dimension: number = rls.questionInt("INGRESE NUMERO DE LA DIMENSION: ");
let numArr: number[] = new Array(dimension);
let counterpositive: number = 0;
let counternegative: number = 0;
let counterceros: number = 0;
for(let i: number = 0; i <= numArr.length - 1; i++){
    numArr[i] = rls.questionInt("Ingrese numero para la cadena: ");
    if(numArr[i] > 0){
        counterpositive++;
}
    if(numArr[i] < 0){
        counternegative++;
}
    if(numArr[i] === 0){
        counterceros++;
}
}
console.log("Los tipos de numeros son: ");
console.log(counterpositive,"positivos.");
console.log(`${counternegative} negativos.`);
console.log(`${counterceros} ceros.`);


