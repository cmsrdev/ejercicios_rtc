// Completa la función que tomando dos números como argumento devuelva el más alto.


//1

 function sum(numberOne , numberTwo){
    if (numberOne > numberTwo){
        return numberOne;
    }
    else if(numberTwo > numberOne){
        return numberTwo;
    }
}

//2

function sum2(numberOne , numberTwo){
    if (numberOne > numberTwo){
        return numberOne;
    }
    else if (numberOne < numberTwo){
        return numberTwo;
    }
}

console.log(sum2(60, 40));