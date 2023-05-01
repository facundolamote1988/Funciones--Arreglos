function randomNumeros(top: number): number {
    return Math.floor(Math.random() * top);
}
function numeroRandomOne(arr: number[], largo: number, top: number): void {
    for (let i = 0; i < largo; i++) {
        arr.push(randomNumeros(top));
    }
}
const arrNum: number[] = [];
numeroRandomOne(arrNum, 10, 1000);

const bubbleSortImproved = (arr: number[]): number[] => {
    let auxiliar: number;
    let verdad: boolean;
    let outer: number = 0;
    let inner: number = 0;
    //Pone el length -1 porque en la primer pasada el numero mayor ya queda al final, y queda i++ porq va hacia la derecha
    //Se muestra las vueltas que corre cada ciclo
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(`CORRE BUCLE EXTERIOR ${++outer}`);
        verdad = true;
        for (let j = 0; j <= arr.length - 1 - i; j++) {
            console.log(`CORRE BUCLE INTERIOR ${++inner}`);
            if (arr[j] > arr[j + 1]) {
                auxiliar = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = auxiliar;
                verdad = false;

            }
        }
        if (verdad) break;
    }
    return arr;
};//Trabajando con numeros,necesitamos la funcion de comparacion.
console.log("Arreglo Original ---", arrNum);
// console.log("Arreglo Ordenado ----", arrNum.sort());
// console.log("Arreglo Burbuja- Bubble Sort Improved", bubbleSortImproved(arrNum));
//Con metodo Sort, pero un Arrow Function, se le especifica que hacer (a-b="algo")
console.log("Arreglo Burbuja - Sort, correctamente");
console.log(arrNum.sort((a: number, b: number) => a - b));

//El metodo sort se utiliza mejor para arreglos de tipo String.
let names: string[] = ["alfa", "alfalfa", "beta", "betametazona", "omega", "al"];
console.log("string Original ", names);
console.log("String ordenado alfabeticamente ", names.sort());
console.log("String invertido", names.sort().reverse());

