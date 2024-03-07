// Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(arr) {
    let average = 0;
    let sumAll = 0;
    for (let allNumbers of arr){
        sumAll += allNumbers;
        average = sumAll / arr.length;
    }
    return average
}

console.log(average(numbers))

// Podemos hacer un match.round para formatear el resultado

function average2(arr) {
    let average = 0;
    let sumAll = 0;
    for (let allNumbers of arr){
        sumAll += allNumbers;
        average = sumAll / arr.length;
    }
    return Math.round(average)
}

console.log(average2(numbers))

// O dejarlo con dos decimales

function average3(arr) {
    let average = 0;
    let sumAll = 0;
    for (let allNumbers of arr){
        sumAll += allNumbers;
        average = sumAll / arr.length;
    }
    // con parseFloat pasamos el string resultante de toFixed a un numero otra vez
    // numero 2 entre los parentesis de toFixed para decirle cuantos decimales queremos dejarle después de la coma
    return parseFloat(average.toFixed(2)) 
}

console.log(average3(numbers))