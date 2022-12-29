var sentence = "I am very good IT Developer";
var counter = 0;
for (let index = 0; index < sentence.length; index++) {
    var char = sentence.charAt(index);
    var charCopy = char.toLowerCase();
    if (charCopy == 'a' || charCopy == 'e' || charCopy == 'i' || charCopy == 'o' || charCopy == 'u') {
        // console.log(char);
        counter = counter + 1;
    }
}
console.log(`Given String is :- ${sentence} `);
console.log(`Total vowels in string is : ${counter}`);

console.log("===========================================================");
let cube =function(num1,num2,num3,num4,num5) {
    let res1=num1*num1*num1;
    let res2=num2*num2*num2;
    let res3=num3*num3*num3;
    let res4=num4*num4*num4;
    let res5=num5*num5*num5;
    console.log(`Cube Of "${num1}" is : ${res1}`);
    console.log(`Cube Of "${num2}" is : ${res2}`);
    console.log(`Cube Of "${num3}" is : ${res3}`);
    console.log(`Cube Of "${num4}" is : ${res4}`);
    console.log(`Cube Of "${num5}" is : ${res5}`);
    console.log(`The Sum Of Cubes Is : ${res1+res2+res3+res4+res5}`);
}
cube(1,2,3,4,5);


console.log("==============================================================");
console.log(`Given String Is :- "Hard work always pays back"`);
var word = "HardWorkAlwaysPaysBack";
var tlength =word.length;
// console.log("word Length",tlength);
for (let i = 0; i < tlength; i++) {
    if ((i%2!=0)) {
        console.log(word.charAt(i));
    }
}
console.log("-------------------------------------------------------------------------");
console.log(`Given String Is :- "Soon I will be Angular IT Champ"`);
var word = "SoonIwillbeAngularITChamp";
var tlength =word.length;
// console.log("word Length",tlength);
for (let i = 0; i < tlength; i++) {
    if ((i%2!=0)) {
        console.log(word.charAt(i));
    }
}
console.log("==============================================");
  var factorial=function (num) {
    let factor=1;
    for (let i = 1; i <=num; i++) {
        factor =factor*i;
    }
    console.log(`Given Number Is : ${num}`);
    console.log(`Factorial of Given Number Is : ${factor}`);
  }
  factorial(5)
  console.log("-----------------------------------------");
  factorial(7)
  console.log("-----------------------------------------");
  factorial(8)
  console.log("-----------------------------------------");
  factorial(12)
