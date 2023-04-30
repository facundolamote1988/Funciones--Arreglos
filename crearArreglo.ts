/*                                          CREAR ARREGLO
1) Crear un arreglo de letras e imprimirlo.
2) Dado un array con nombres de tamaño 5, pedir         ***PAG.52
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.*/

import * as rls from "readline-sync";

const cadena: string[] = ["Jose", "Esteban", "Raul", "Micaela", "Rocio",];
const cadenaReal: number = cadena.length-1
const posicionArr: number = rls.questionInt("Ingrese posicion a arreglar: ");
    
    if(posicionArr <= 5){
        let name: string = rls.question("Ingrese nombre: ");
        console.log(`El nombre que se ubica en la posicion ${posicionArr}, es ${name}`);
        console.log("reemplazando a ", cadena[posicionArr -1]);
}   if(posicionArr > 5){
        console.log("LA CADENA SOLO TIENE 5 POSICIONES.");
        console.log("INGRESE UN NUMERO DEL 1 AL 5.");
}
//let reemplazo: number = (numArr - cadena.length-1);
//for(indice = 0; indice <= numArr; indice++){
  //  arreglo[indice] = (numArr[cadena.length -1]);
//}
//const arrCadena: string = (numArr.length -1);
//console.log("Ingrese nombre: ");




    

    
   


