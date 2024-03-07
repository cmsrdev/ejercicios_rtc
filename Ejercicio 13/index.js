/**
 * Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
 * comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
 */

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

//1
function finderName(arr) {
    for(let i = 0; i < arr.length; i++){
        const iValue = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            const jValue = arr[j];
            if(iValue === jValue){
                return console.log(true), `La palabra ${iValue} es igual a ${jValue}, en la posición: ${j}`;
            }
        }
    }
    return false;
}

//2
function finderName2(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return console.log(true), `La palabra ${arr[i]} es igual a ${arr[j]}, en la posición: ${j}`;
            }
        }
    }
    return false;
}


console.log(finderName(nameFinder));