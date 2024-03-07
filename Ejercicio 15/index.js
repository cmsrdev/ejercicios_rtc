// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

//1 - Ya que solo queremos iterar el array podemos usar un for of que seria lo mejor, pero tambien se puede hacer de la manera tradicional que veremos en el ejemplo 2
for(let result of products){
    if(result.includes('Camiseta')){ // creamos una condicion que sea que si incluye la palbra Camiseta nos muestre por consola dicha palabra del array
        console.log(result)
    }
}


//2
for(let i = 0; i < products.length; i++){
    if(products[i].includes('Camiseta')){
        console.log(products[i])
    }
}