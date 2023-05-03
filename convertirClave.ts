/*                  CONVERTIR CLAVE         
Convertir una palabra ingresada por el              ***PAG.57
usuario en clave, según las reglas siguientes:
● si el caracter es una vocal reemplazar aeiou por. , ; :
!respectivamente.
● si el caracter es un número o un operador
matemático(+ - * / ) queda igual.
● si el caracter es una consonante minúscula pasar a
mayúscula y viceversa.*/

import * as rls from "readline-sync";

let palabra: string = rls.question("Ingrese texto para posible Clave: ");

function convertirEnClave(palabra: string): string {
    let vocales: string = "aeiou";
    let signos: string = ".,;:!";
    let matematicos: string = "0123456789+-*/";
    let clave: string = "";
    for (let i = 0; i < palabra.length; i++) {
        if (matematicos.indexOf(palabra[i]) >= 0) {
            clave += palabra[i];
        } else {
            if (vocales.indexOf(palabra[i]) >= 0) {
                clave += signos[vocales.indexOf(palabra[i])];
            } else {
                if (palabra[i] == palabra[i].toUpperCase()) {
                    clave += palabra[i].toLocaleLowerCase();
                } else
                    clave += palabra[i].toUpperCase();
            }
        }
    }


    return clave;
}
convertirEnClave(palabra);
console.log("La clave es: ", convertirEnClave(palabra));
