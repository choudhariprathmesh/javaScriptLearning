const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Given Array is : ${arrayNumbers}`);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log(`Total Length Of Given Array is : ${arrayNumbers.length}`);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("First Index Element :", arrayNumbers[0]);
console.log("Last Index Element :", arrayNumbers[10]);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("Third Last Element In Array :", arrayNumbers[8]);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("All Even Numbers in the Array : ");
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    // console.log(element);
    let even = function (num) {
        if (num % 2 == 0) {
            console.log(num);
        }
    }
    even(element);

}
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("All Odd Numbers in the Array : ");
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    // console.log(element);
    let even = function (num) {
        if (num % 2 != 0) {
            console.log(num);
        }
    }
    even(element);

}
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("All Even Positioned Elements Are : ");
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 == 0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("All Odd Positioned Elements Are : ");
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index % 2 != 0) {
        const element = arrayNumbers[index];
        console.log(element);
    }
}
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;
}
console.log(`Total Sum of All Element is : ${sum}`);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array is : ${arrayNumbers}`);
console.log("Numbers Which Is Multiple Of '5' Is");
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    // console.log(element);
    let even = function (num) {
        if (num % 5 == 0) {
            console.log(num);
        }
    }
    even(element);

}
console.log("-------------------------------------------------------------------------");
console.log(`Given Array Is : ${arrayNumbers}`);
let isAvailable1 = arrayNumbers.includes(115);
let isAvailable2 = arrayNumbers.includes(23);
console.log(`Is Number '115' Is Available on Array or Not : ${isAvailable1}`);
console.log(`Is Number '23' Is Available on Array or Not : ${isAvailable2}`);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array Is : ${arrayNumbers}`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`After Inserting "55 & 66" On Array : ${arrayNumbers}`);
console.log("-------------------------------------------------------------------------");
console.log(`Given Array Is : ${arrayNumbers}`);
let spliceRes = arrayNumbers.splice(4, 3)
console.log(spliceRes);
console.log(`After Deleting '3' Elements Starting From '4' : ${arrayNumbers}`);