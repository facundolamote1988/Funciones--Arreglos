/*                              NUMEROS DESEADOS
• Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario    ***PAG. 36
desee.
• Muestre los números del arreglo al usuario*/

import* as rls from "readline-sync";
const dimension: number[] = new Array(5);

for(let i = 0; i < dimension.length; i++){
    dimension[i]= rls.questionInt("Ingrese numero: ");
}
console.log("Los numeros ingresados son: ", dimension);


