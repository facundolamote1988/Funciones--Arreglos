/*                          SUMA ELEMENTOS - ARREGLOS
•Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N                     ***PAG.45
• La dimensión del arreglo es ingresada por el
usuario
• Los elementos (números) del arreglo son
ingresados por el usuario*/

import * as rls from "readline-sync";

const dim: number = rls.questionInt("ingrese numero de dimension: ");
let arrNum: number[] = new Array(dim);
let result: number = 0;

for(let i = 0; i < dim ; i++){
    arrNum[i] = rls.questionInt("Ingrese numero:..");
    result += arrNum[i];
} 
console.log("El resultado de la suma de todo el arreglo es: ",result);





// const numArr: number[] = new Array(dim);

// for(let i = 0; i <= dim.length; i++ ){
//     numArr[i] = rls.questionInt("ingrese numero:..");
// }