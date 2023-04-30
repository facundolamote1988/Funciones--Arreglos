/*                          ARREGLO MESES
Construya un algoritmo que según el número de
mes muestre el nombre de dicho mes*/

import * as rls from "readline-sync";

// switch(monthsNumber){
//      case 1: console.log("enero");
//         break;
//     case 2: console.log("febrero");
//         break;
//     case 3: console.log("marzo");
//         break;
//     case 4: console.log("abril");
//         break;
//     case 5: console.log("mayo");
//         break;
//     case 6: console.log("junio");
//         break;
//     case 7: console.log("julio");
//         break;
//     case 8: console.log("agosto");
//         break;
//     case 9: console.log("septiembre");
//         break;
//     case 10: console.log("octubre");
//         break;
//     case 11: console.log("noviembre");
//         break;
//     case 12: console.log("diciembre");
//         break;
//     default:
//         console.log("pusiste cualca bro");
//     }
const months: string[] = ["enero", "febero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre","octubre", "noviembre", "diciembre"];
console.log(months[months.length -1]); //para saber el ultimo elemento del indice
const monthsNumber: number = rls.questionInt("ingrese numero de mes (solo del 1 al 12): ");
console.log(months[monthsNumber -1]);
if(monthsNumber > 12){
    console.log("tenes que poner el numero que sea valido para un mes (SOLO DEL 1 AL 12)");
    
}

