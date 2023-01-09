const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log("===========================================================================================================");
console.log("Given Array Is :- ",arrayNumbers);
console.log("================================= Array Values and its Index Value ========================================");
arrayNumbers.forEach((currentValue,index) => {
    console.log("Value is :-",currentValue,"And Index is :-",index);
});
const arrayOfPositive = [];
const arrayOfNegative = [];
const arrayOfEven = [];
arrayNumbers.forEach((currentValue)=> {
    if (currentValue>=0) {
        arrayOfPositive.push(currentValue)
        // console.log(currentValue);
    }
    if (currentValue<0) {
        arrayOfNegative.push(currentValue)
        // console.log(currentValue);
    }
    if(currentValue%2==0) {
        arrayOfEven.push(currentValue);
    //   console.log(currentValue);
    }    
});
console.log("================================= Array Of Positive Numbers ========================================");
console.log(arrayOfPositive);
console.log("================================= Array Of Negative Numbers ========================================");
console.log(arrayOfNegative);
console.log("================================= Array Of Even Numbers ============================================");
console.log(arrayOfEven);
console.log("================================= Sum Of All Array Element  ========================================");
let sum =0;
arrayNumbers.forEach(element => {
    sum =sum+element;
});
console.log("Sum Of Array Is :- ",sum);
console.log("================================= Even Positioned Array Value ======================================");
const evenPositionedArray =[];
arrayNumbers.forEach((currentValue,index)=> {
    if (index%2==0) {
        evenPositionedArray.push(currentValue)
        // console.log(currentValue);
    }
});
console.log(evenPositionedArray);















