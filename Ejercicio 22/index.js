/**
 * Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
 * Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// for of
for(let i of foodSchedule){
    if(i.isVegan === false){
        i.name = fruits.splice(0,1)[0];
        i.isVegan = true;
    }
}
console.log(foodSchedule)


//for in
for (let i in foodSchedule){
    if(foodSchedule[i].isVegan === false){
        foodSchedule[i].name = fruits.splice(0, 1)[0];
        foodSchedule[i].isVegan = true;
    }
}
console.log(foodSchedule)


// iteracion tipica
for(let i = 0; i < foodSchedule.length; i++){
    if(foodSchedule[i].isVegan === false){
        foodSchedule[i].name = fruits.splice(0,1)[0];
        foodSchedule[i].isVegan = true;
    }
}
console.log(foodSchedule)

// intente con un while pero me resulto un poco extraño y se me terminaba haciendo un bucle infinito :(