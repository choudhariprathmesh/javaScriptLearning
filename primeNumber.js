console.log("================================= Fibonacci Series=====================================");

let n=12;
let a=0;
let b=1;
console.log(a);
console.log(b);
for (let i = 1; i <= n-2; i++) {
    let c=a+b;
    console.log(c + " ");
    a = b;
    b = c;
    
}

console.log("================================= Prime Number=====================================");
		
	// let temp;
	// let isPrime=true;
	// let num=1;
	// for(let i=2;i<=num/2;i++)
	// {
    //        temp=num%i;
	//    if(temp==0)
	//    {
	//       isPrime=false;
	//       break;
	//    }
	// }
	// if(isPrime)
	//    console.log(num + " is a Prime Number");
	// else
	//    console.log(num + " is not a Prime Number");



var primeCheck = function(val) {

    let temp;
	let isPrime=true;
	let num=val;
	for(let i=2;i<=num/2;i++)
	{
           temp=num%i;
	   if(temp==0)
	   {
	      isPrime=false;
	      break;
	   }
	}
	if(isPrime)
	   console.log(num + " is a Prime Number");
	else
	   console.log(num + " is not a Prime Number");
    
}
primeCheck(1)
primeCheck(2)
primeCheck(3)
primeCheck(4)
primeCheck(5)
primeCheck(6)
primeCheck(7)
primeCheck(8)
primeCheck(9)
primeCheck(10)
primeCheck(11)