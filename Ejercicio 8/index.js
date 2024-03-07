/*

Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:

*/


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(arr) {
  let longestWord = arr[0];
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  
  return longestWord;
}

console.log(`El primer string mas largo es ${findLongestWord(avengers)}`)
