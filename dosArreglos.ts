/*                              DOS ARREGLOS
•Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que               ***pag. 42
almacene 3 números ambos ingresados por el
usuario.
•Al final debe imprimir los valores por consola.*/

import * as rls from "readline-sync";
//const name: string = rls.question("ingrese 2 nombres: ");
let nameArr: string[] = new Array(2);
let numeros: number[] = new Array(3);

for(let i = 0; i < nameArr.length; i++){
    nameArr[i] = rls.question("ingrese nombre:..")
}
for(let i = 0; i < numeros.length; i++){
    numeros[i] = rls.questionInt("ingrese numero:..")
}
console.log(`los nombres ingresados son: ${nameArr}`);
console.log(`los numeros ingresados son: ${numeros}`);
