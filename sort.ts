/*ORDENAMIENTO:
    Obtiene un numero al azar*/
function randomNumber(top: number): number{
    return Math.floor(Math.random() * top);
}
// Llena un arreglo con tantos numero al azar como indiquemos.
function fillRandom(arr: number[], len: number, top: number): void{
    for(let i = 0;i < len;i++) {
        arr.push(randomNumber(top));
    }
}
const numbers: number[] = [];
fillRandom(numbers, 10, 10000);
console.log(numbers);

//Bubble Sort
const bubbleSort = (arr:number[]): number[]=>{
let temp: number;
//flag
let noSwaps: boolean;
//Vamos a tener un bucle anidado con un puntero iterando de derecha a izquierda
for(let i = arr.length; i > 0; i--){
    noSwaps = true;
//Y tenemos otro bucle iterando de izq a derecha (este es el que compara los numeros entre si)
for(let j = 0; j < i; j++){
    //Comparamos los dos punteros 
    if (arr[j] > arr[j + 1]){
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
    }
}
    if(noSwaps) break;
}
    return arr;
};
console.log(`arreglo original ----${numbers}`);
console.log(bubbleSort(numbers));

