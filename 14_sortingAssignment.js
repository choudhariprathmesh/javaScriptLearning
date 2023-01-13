console.log("================================ Original Array =================================");
const arraayRollNumber=[113,45,56,11,32,45,109,799,56,45];
console.log(arraayRollNumber);
console.log("========================== After Reversing The Array ============================");
arraayRollNumber.reverse();
console.log(arraayRollNumber);
console.log("============================ After Sorting The Array ============================");
arraayRollNumber.sort();
console.log(arraayRollNumber);
console.log("================ After Sorting The Array in Ascending Order =====================");
arraayRollNumber.sort((rollNo1,rollNo2)=>{
               return rollNo1>rollNo2? 1 : -1;
});
console.log(arraayRollNumber);
console.log("===================== Gratest Number From Array ===================");
console.log("Gratest Number From Array Is :- ",arraayRollNumber[arraayRollNumber.length-1]);
console.log("================== Smallest Number From Array =====================");
arraayRollNumber.reverse();
console.log("Smallest Number From Array Is :-",arraayRollNumber[arraayRollNumber.length-1]);
// console.log(arraayRollNumber);
console.log("================ After Removing Duplicates Value From The Array =================");
// console.log(arraayRollNumber);
let duplicateElement=new Set(arraayRollNumber);
duplicateElement.forEach((value)=>{
    console.log(value);
})

















