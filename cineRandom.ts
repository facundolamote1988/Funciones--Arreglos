/*• Diseñar un algoritmo que recorra las butacas de una sala de cine y determine 
cuántas butacas desocupadas hay. 
• Suponga que para modelar este problema, se utiliza un arreglo con 
valores lógicos.
• La presencia de un valor VERDADERO (TRUE) en el arreglo INDICA que la BUTACA está OCUPADA.
• La presencia de un valor FALSO (FALSE) en el arreglo INDICA que la butaca está DESOCUPADA.*/

function butacasOcupadas(arr: boolean[]): void{
    let contarSillas: number = 0;
    let libres: number = 0;
    for(let i: number = 0; i <= arr.length;i++){
        if(arr[i] == true){
        contarSillas ++;
        }
    }
    libres = (arr.length) - (contarSillas);
    console.log("la cantidad de sillas ocupadas son: ", contarSillas);
    console.log("la cantidad de sillas desocupadas son: ", libres);
    
}
const arreglo = new Array (Math.floor(Math.random() * 30));
butacasOcupadas(arreglo);

