console.log("=========================Arithmatic operator======================");
var a=10;
var b=5;
var c=a+b;
console.log(`Addition is ${c}`);
var sub =a-b;
console.log(`substraction is ${sub}`);
console.log(`multiplication is ${a*b}`);
console.log(`explonentional is ${a**b}`);
console.log(`Division is ${a/b}`);
console.log(`Modulus is ${a%b}`);

console.log("=======================Assignment operator========================");

var val1=10
var val2=5
var assign =val1+val2
console.log(`assign is ${assign}`);
val1 += val2
console.log(`Compound Addition ${val1}`);
val1-= val2
console.log(`Compound substraction ${val1}`);
val1*=val2
console.log(`Compound multiplication ${val1}`);
val1 /= val2
console.log(`Compound division ${val1}`);
val1 %= val2
console.log(`Compound modulus ${val1}`);

console.log("========================incriment decrement operator=================================");

var num3 = 10;
var result1 = num3++; // num3 = num3 + 1;
var result = ++num3; // num3 = num3 + 1;
console.log(`Increment operator  result is ${result1}`);
console.log(`Increment operator  result is ${result}`);

var num4 = 5;
var res1 = num4--; //num4 -1;
var res = --num4; //num4 -1;
console.log(`Decrement operator result is ${res1}`);
console.log(`Decrement operator result is ${res}`);

console.log(`============ Comparison Operators =================`);

var num1 = 10;
var num2 = 5;
var num3 = 10
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`)
console.log(`> Operator - Greater than ${num1>num3}`)

var result = num1 < num2;
console.log(`< Operator - Less than ${result}`)

var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`)

var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);

console.log(`Check even or ODD: ${11%2}`);

console.log("=================Reverse Method=====================");
 let w="prathmesh" 
 let v=w.split("").reverse().join("");
 console.log(v); 

 const fruits1 = ["Banana", "Orange", "Apple", "Mango"];  
 console.log(fruits1.reverse().join(""));