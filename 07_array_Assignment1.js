console.log("====================== Assignment 1 ==============================");
const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Your Array is :- ${fruits}`);
console.log("=============================================================================");
let elementAtZeroIndex = fruits[0];
let elementAtLastIndex = fruits[4];
console.log(`Element at Zero Index : ${elementAtZeroIndex}`);
console.log(`Element at Last Index : ${elementAtLastIndex}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
fruits.unshift("Papaya")
console.log(`Added Element Before 'Banana' : ${fruits}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
let spliceRes = fruits.splice(4, 1);
console.log(spliceRes);
console.log(`Remove 'Mango' : ${fruits}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
fruits.push("Pineapple")
console.log(`Added 'Pineapple' at Last : ${fruits}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
fruits.splice(4, 0, "Dragon");
console.log(`Insert 'Dragon Fruit' Before 'Water Melon' : ${fruits}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
fruits.splice(2, 1, "Kiwi");
console.log(`Replace 'Orange' with 'Kiwi'${fruits}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
let sliceres = fruits.slice(1, 5)
console.log(`Element at index '1 to 4' : ${sliceres}`);
console.log("--------------------------------------------------------------------------------------------------------------");
console.log(`Given Array is : ${fruits}`);
let sliceresult = fruits.slice(4)
console.log(`Last Three Element From Array : ${sliceresult}`);


