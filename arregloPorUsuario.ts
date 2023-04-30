/*                  NOMBRES DESEADOS
•Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee                  ***PAG.39

•Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas*/

import * as rls from "readline-sync";

const arrDim: number = rls.questionInt("Ingrese la dimension del arreglo: ");
let userArr: string[] = new Array(arrDim);

for(let i: number = 0; i < userArr.length; i++){
    userArr[i] = rls.question("nombre:...");
}