/**
 * Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number 
 * lo sume y de lo contrario cuente la longitud del string y lo sume.
 * pista (typeof)
*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arr) {
    let sumAll = 0
    for (let i of arr){
        if (typeof(i) === 'number'){
            sumAll += i
        }
        else if(typeof(i) === 'string'){
            sumAll += i.length
        }
    }
    return sumAll
}

console.log(averageWord(mixedElements))
