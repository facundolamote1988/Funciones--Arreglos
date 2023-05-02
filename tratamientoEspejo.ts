/*                  TRATAMIENTO DE CADENAS    ***PAG. 56
Invertir una palabra ingresada por el
usuario.*/
import * as rls from "readline-sync";
const palabra: string = rls.question("Ingrese la palabra a invertir: ");

function invertirPalabra(arr: string) {
    let arregloPalabra: string[] = palabra.split("");
    let reverso = arregloPalabra.reverse();
    let invertido = reverso.join("");
    console.log(palabra, "De manera invertida queda:---", invertido, "---");
}
invertirPalabra(palabra);


