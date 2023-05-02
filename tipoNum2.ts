/*                   TIPOS DE NUMEROS             (con funciones)
• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)                    ***PAG. 55
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay*/

import * as rls from "readline-sync";
const dimension: number = rls.questionInt("INGRESE NUMERO DE LA DIMENSION: ");
const newArr: number[] = new Array(dimension);

function tipoDeNums(newArr: number[]): void{
    let sumapositive: number = 0;
    let sumanegative: number = 0;
    let sumaceros: number = 0;
    for(let i: number = 0; i < newArr.length; i++){
        newArr[i] = rls.questionInt(`Ingrese numero para la cadena:  `);
        if(newArr[i] > 0){
            sumapositive++;
    }
        if(newArr[i] < 0){
            sumanegative++;
    }
        if(newArr[i] === 0){
            sumaceros++;
}

    }
    console.log("Los tipos de numeros son: ");
    console.log(sumapositive,"POSITIVOS.");
    console.log(`${sumanegative} NEGATIVOS.`);
    console.log(`${sumaceros} CEROS.`);
    }

tipoDeNums(newArr);