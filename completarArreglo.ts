/*                              COMPLETAR ARREGLO
• Llenar un array de 10 posiciones con números
aleatorios entre 0 y 99
• Para obtener números aleatorios crear una función       ***PAG. 48
Azar, que se base en las funciones disponibles en el
paquete Math:
-Math.random() devuelve un nro al azar entre 0 y 1.*/

let arregloArray: number[] = new Array(10);
let i: number = 0;

for(let i = 0; i < 10; i++){
    arregloArray[i] = Azar(100);
}
function Azar(arre: number): number{
    return Math.floor(Math.random()*100);
}   
console.log(`el numero en la posicion ${i} es ${arregloArray[i]}`);
