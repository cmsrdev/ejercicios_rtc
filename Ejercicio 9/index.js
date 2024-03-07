/**
 * Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. 
 * Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma 
 * de todos los números de la matriz.
 */

//1
const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(arr) {
    let sum = 0
    for (let allNumbers of arr){
        sum += allNumbers
    }
    return sum
}

console.log(sumAll(numbers))

//2
function sumAll2(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum
}
console.log(sumAll2(numbers));

//3
function sumAll3(arr) {
    let sum = arr.reduce(function (a, b){
        return a + b
    })
    return sum
}

console.log(sumAll3(numbers));
