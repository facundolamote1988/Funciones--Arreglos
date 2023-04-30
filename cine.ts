/*• Diseñar un algoritmo que recorra las butacas de una sala de cine y determine 
cuántas butacas desocupadas hay. 
• Suponga que para modelar este problema, se utiliza un arreglo con 
valores lógicos.
• La presencia de un valor VERDADERO (TRUE) en el arreglo INDICA que la BUTACA está OCUPADA.
• La presencia de un valor FALSO (FALSE) en el arreglo INDICA que la butaca está DESOCUPADA.*/

function butacasDisponible(arr: boolean[]):void{
    let counter: number = 0;
    let desocupadas:number = 0;
    for (let i = 0; i <= arr.length; i++) {
       if(arr[i] == true){
        counter ++;
        }
    }
    desocupadas = (arr.length) - (counter);
    console.log("la cantidad de sillas ocupadas son: ", counter);
    console.log("la cantidad de sillas desocupadas son: ", desocupadas);
}
const butacas: boolean[] = new Array();
butacas.push(true);
butacas.push(true);
butacas.push(true);
butacas.push(true);
butacas.push(false);
butacas.push(false);
butacas.push(false);
butacasDisponible(butacas);
