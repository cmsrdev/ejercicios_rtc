//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

//mostramos el array y usamos el metodo .length para saber la cantidad exacta de elementos

console.log(avengers);
console.log(avengers.length);

// sabiendo que HULK es el 1 elemento su indice es 0 y lo mostramos en consola

console.log(avengers[0]);

//1.2 Cambia el primer elemento de avengers a "IRONMAN"

//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; // linea comentada porque tiene el mismo nombre la variable que anteriormente ,  descomentar !

//el primer elemento tiene siempre el indice 0 sabiendo esto cambiamos un elemento por el otro

avengers[0] = 'IRONMAN';

//nos aseguramos que se cambia con el console.log

console.log(avengers[0]);

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.

//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"]; // linea comentada porque tiene el mismo nombre la variable que anteriormente ,  descomentar !

// usando el metodo .length podemos saber la cantidad de elementos de el array

console.log(avengers.length);

/*1.4 Añade 2 elementos al array: "Morty" y "Summer". 
Muestra en consola el último personaje del array*/

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

//1
//nos aseguramos de la cantidad de elementos del array

console.log(rickAndMortyCharacters.length);

// añadimos los elementos ya conociendo sus longitud y su indice al usar anteriormente el metodo .length

rickAndMortyCharacters[3] = "Morty";
rickAndMortyCharacters[4] = "Summer";

// nos aseguramos que el array es mas grande por lo que hemos añadido esos elementos

console.log(rickAndMortyCharacters.length);

//mostramos el ultimo personaje del array

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);


//2
// usando el metodo push podemos añadir al final de un array tantos elementos como le pongamos dentro de ()

rickAndMortyCharacters.push("Morty", "Summer");

// podemos hacer una manera distinta a la anterior creando una variable que luego podemos mostrar por consola con el ultimo personaje del array

const ultimoElemento = rickAndMortyCharacters[rickAndMortyCharacters.length -1];
console.log(ultimoElemento);


//3
// usando el metodo .splice

// primero nos aseguramos de la cantidad de elementos que tiene el array para añadir estos nuevos al final de este, ya que no queremos usar push

console.log(rickAndMortyCharacters.length);

// conociendo la cantidad de elementos de este que son 3 sabemos que sus indices son 0 , 1 , 2 usando splice podemos añadir estos nuevos elementos al array

rickAndMortyCharacters.splice(3, 0, "Morty");
rickAndMortyCharacters.splice(4, 0, "Summer");

// nos aseguramos de que añadimos esto correctamente haciendo un .length y luego mostrando el array

console.log(rickAndMortyCharacters.length);
console.log(rickAndMortyCharacters);

// mostramos el ultimo personaje del array

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);


//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// buscamos la cantidad de elementos que tiene el arrray para asegurarnos posteriormente que se ha elminado un elemento

console.log(rickAndMortyCharacters.length);

// usando el metodo .pop eliminaremos el ultimo elemento de un array

rickAndMortyCharacters.pop();

// mostramos en consola el array para verificar que hemos eliminado el ultimo elemento

console.log(rickAndMortyCharacters);

//mostramos el primer y en la siguiente linea el ultimo elemento del array

console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]);


//1.6 Elimina el segundo elemento del array y muestra el array por consola.

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

// nos aseguramos con el metodo .length la cantidad de elementos que tiene el array

console.log(rickAndMortyCharacters.length);

// ahora sabiendo la cantidad de elementos conocemos sus indices y usamos splice para eliminar el segundo elemento

rickAndMortyCharacters.splice(1, 1);

// por ultimo mostramos por consola el array

console.log(rickAndMortyCharacters);