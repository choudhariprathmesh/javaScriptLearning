// const factorialOf = integer => {
//     let factorial = 1;
  
//     for(let i = 1; i <= integer; i++) {
//       factorial *= i;
//     }
  
//     return factorial;
//   }
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
