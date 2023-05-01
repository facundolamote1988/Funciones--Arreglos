
// let arrNumbers: number[] = new Array(Math.floor(Math.random() * 30));

function randomNum(top: number): number {
    return Math.floor(Math.random() * top);
}
function numeroRandom(arr: number[], largo: number, top: number): void {
    for (let i = 0; i < largo; i++) {
        arr.push(randomNum(top));
    }
}
const arrN: number[] = [];
numeroRandom(arrN, 5, 300);
// console.log(arrN);

const bubbleSortOne = (arr: number[]): number[] => {
    let auxiliar: number;
    let verdad: boolean;
    for (let i = arr.length; i > 0; i--) {
        verdad = true;
        for (let j = 0; j < i; j++) {
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
};
console.log("Arreglo Original ---", arrN);
console.log("Arreglo Ordenado ----", bubbleSortOne(arrN));



