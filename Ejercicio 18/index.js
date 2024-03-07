// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let result in placesToTravel){
    if (placesToTravel[result].id === 11 || placesToTravel[result].id === 40){
        placesToTravel.splice(result, 1);
    }
    console.log(placesToTravel[result]);
}

// con for of
for (let result of placesToTravel){
    if (result.id === 11 || result.id === 40){
        placesToTravel.splice(placesToTravel.indexOf(result), 1);
    }
}
console.log(placesToTravel);

// podemos tambien en vez de usar || usar un else if

for (let result of placesToTravel){
    if(result.id === 11){
        placesToTravel.splice(placesToTravel.indexOf(result), 1)
    }
    else if(result.id === 40){
        placesToTravel.splice(placesToTravel.indexOf(result), 1)
    }
}
console.log(placesToTravel)