/**
 * Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
 * Puedes usar este array para probar tu función:
 */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

//1
function repeatCounter(arr){
  const result = {}; // funciona creando un array vacio con [] pero es mas lógico crear un objeto ya que este contendra un string que sera el nombre de la palabra y además un valor el número de veces q se repite
  for(let i = 0; i < arr.length; i++){
    if (result[arr[i]] >= 1){
      result[arr[i]]++;
    }
    else{
      result[arr[i]] = 1;
    }
  }
  return console.log(result);
}




/**
* para poder entender bien como funcionaba esto mire varia documentacion por google porque no terminaba de entender como esto guardaba el valor de la palabra y a la vez el numero de veces, por lo que
* entendi esto al recorrer el bucle el array y tener un objeto vacio creado con const, cuando empezamos a recorrer array este va guardando el valor en la variable y a su vez le da un valor numerico
* que seria las veces que se repite esa palabra que es lo que especificamos en el if pero aun me cuesta entender porque sin decirle nada guarda el valor de cada palabra entiendo que es que al empezar el 
* bucle for (let i = 0......) y recorrer el array este va guardando su resultado dentro del objeto porque lo especificamos mas abajo en el if, utilice unos cuantos console.log para ver como se comportaba
* pero sigue costandome un poco entender esto ultimo que comento. Lo mas que me cuesta entender es como se esta metiendo esos datos dentro del objeto vacio ya que no se usa un metodo como por ejemplo un .push
* y de todos modos sin usar un .push o algo por el estilo estan metiendose esos datos ahi dentro. Esto es lo que no termino de entender bien.
*/

/**
 * me gustaria me enviaran un correo con una explicacion mas extendida de esto para poder entender mejor porque a parte de guardar el valor de i el bucle tambien guarda la palabra del array dentro
 * de el objeto, muchas gracias !!!
 */


//2
function repeatCounter2(arr){
  const result = {}; // funciona creando un array vacio con [] pero es mas lógico crear un objeto ya que este contendra un string que sera el nombre de la palabra y además un valor el número de veces q se repite
  for(let i = 0; i < arr.length; i++){
    if (result[arr[i]] >= 1){
      result[arr[i]]++;
    }
    else{
      result[arr[i]] = 1;
    }
    console.log(`esto es el valor de i deberia ser un string ${arr[i]}`) // es un string porque accedemos al array en el indice que valga i en ese momento 0, 1, 2, etc...
    console.log('esto es result en este momento', result) // nos muestra lo que es count en principio vacio y aqui al empezar a recorrer el array guarda su valor
    console.log(`esto deberia ser numerico ${result[arr[i]]}`) // y aqui deberia ser un numero ya que seria el numero que se esta agregando en el bucle es decir el numero de veces que se repite
  }
  return console.log(result);
}

// repeatCounter2(counterWords)


function repeatCounter3(wordsArray) {
  // objeto donde guardaremos el resultado
  const accumulator = {};

  for(const word of wordsArray) {
     // creamos la propiedad con una palabra y contamos cuantas de ellas hay
     accumulator[word] = wordsArray.filter((arr) => {
         return arr == word
       }).length
  }
  
  console.log(accumulator);
}
repeatCounter3(counterWords)