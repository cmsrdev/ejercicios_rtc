/**
 * For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. 
 * Imprimelo por consola.. Puedes usar este array:
 */

const popularToys = [];
const toys = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

//1
for(let i of toys){
    if(i.sellCount > 15){
        popularToys.push(i)
    }
}

//2
for(let i of toys){
    if(i['sellCount'] > 15){
        popularToys.push(i)
    }
}

//3 - seria una funcion para ventas superiores a 15 solamente quizás no es tan util como funcion xq solo es para superiores a 15 pero bueno se podia hacer una funcion para este proposito en concreto
function sellersUpTo15(arr){
    const popularToys = []
    for(let i of arr){
        if (i.sellCount > 15){
            popularToys.push(i)
        }
    }
    console.log(popularToys)
}

sellersUpTo15(toys)
console.log(popularToys)