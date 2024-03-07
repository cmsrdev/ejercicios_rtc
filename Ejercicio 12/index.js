/**
 * Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array 
 * sin los elementos duplicados. Puedes usar este array para probar tu función: pista (cuando eliminamos algo de un array, su longitud se verá afectada)
 */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

//1
function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++){
        const firtsResult = arr[i];
        
        for (let j = i + 1; j < arr.length; j++){
            const secondResult = arr[j];

            if(firtsResult === secondResult){
                arr.splice(j, 1);
            }
        }
    }
    return arr
}

//2
function removeDuplicates2(arr) {
    for (let i = 0; i < arr.length; i++){
        
        for (let j = i + 1; j < arr.length; j++){

        if(arr[i] === arr[j]){
                arr.splice(j, 1);
            }
        }
    }
    return arr
}

//3
function removeDuplicates3(arr){
    for (let i of arr){
        for (let j of arr.slice(arr.indexOf(i)+1)){
            if (i === j){
                arr.splice(arr.indexOf(j), 1)
            }
        }
    }
    return arr
}

console.log(removeDuplicates(duplicates))