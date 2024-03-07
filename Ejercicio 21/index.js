/**
 * Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
 * "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
 */

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

const younger = [];
const adult = [];

//1
for (let i = 0; i < users.length; i++){
    if (users[i].years < 18){
        younger.push(users[i].name);
    }
    else{
        adult.push(users[i].name);
    }
}



//2
for (let j in users){
    if(users[j].years < 18){
        younger.push(users[j].name);
    }
    else{
        adult.push(users[j].name);
    }
}


//3
for(let k of users){
    if (k.years < 18){
        younger.push(k.name);
    }
    else{
        adult.push(k.name);
    }
}

//4
function foundYoungers(arr){
    const younger = [];
    const adult = [];
    for(let i of arr){
        if(i.years < 18){
            younger.push(i.name);
        }
        else{
            adult.push(i.name);
        }
    }
    console.log(`Los usuarios menores de edad son ${younger}`);
    console.log(`Los usuarios mayores de edad son ${adult}`);
}


foundYoungers(users);
console.log(`Los usuarios menores de edad son ${younger}`);
console.log(`Los usuarios mayores de edad son ${adult}`);