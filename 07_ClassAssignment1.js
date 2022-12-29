console.log("================================= Class Vehicle =====================================");
class Vehicle{
    constructor(company,model,fuel,drive,price){
        this.company=company;
        this.model=model;
        this.fuel=fuel;
        this.drive=drive;
        this.price=price;
    }
}
let audi1= new Vehicle("Audi","A3","Petrol","Four Wheel Drive",8000000);
let audi2= new Vehicle("Audi","Q3","Diseal","Two Wheel Drive",4900000);
let mahindra = new Vehicle("Mahindra","Thar","Petrol","Four Wheel Drive",2000000);
let honda =new Vehicle("Honda","Unicorn","Petrol","Two Wheeler",125000);
let hero =new Vehicle("Hero","Splender","Petrol","Two Wheeler",85000);
console.log(audi1);
console.log(audi2);
console.log(mahindra);
console.log(honda);
console.log(hero);
console.log("================================= Class Collage =====================================");

class Collage{
    constructor(name,location,department,degree,){
        this.name=name;
        this.location=location;
        this.department=department;
        this.degree=degree;
    }
}
let coll1=new Collage("FTC Sangola","Sangola","Total 6 Branches Available","B-Tech,M-Tech");
let coll2=new Collage("COEP","Pune","Total 8 Branches Available","B-Tech,M-Tech,PHD");
let coll3=new Collage("SVERI","Pandharpur","Total 7 Branches Available","B-Tech,M-Tech,PHD");
let coll4=new Collage("SKN","Pune","Total 8 Branches Available","B-Tech,M-Tech,PHD");
console.log(coll1);
console.log(coll2);
console.log(coll3);
console.log(coll4);

console.log("================================= Class in Function =====================================");

function traverseObject(coll1) {
    for (const key in coll1) {
        if (Object.hasOwnProperty.call(coll1, key)) {
            const element = coll1[key];
            console.log(key,element);
            
        }
    }
}
traverseObject(coll1)
console.log("----------------------------------------------------------");
traverseObject(coll2)
console.log("----------------------------------------------------------");
traverseObject(coll3)
console.log("----------------------------------------------------------");
traverseObject(coll4)

// console.log("================================= Fibonacci Series=====================================");

// let n=10;
// let a=0;
// let b=1;
// console.log(a);
// console.log(b);
// for (let i = 1; i <= n-2; i++) {
//     let c=a+b;
//     console.log(c + " ");
//     a = b;
//     b = c;
    
// }

// console.log("================================= Prime Number=====================================");
		
// 	// let temp;
// 	// let isPrime=true;
// 	// let num=1;
// 	// for(let i=2;i<=num/2;i++)
// 	// {
//     //        temp=num%i;
// 	//    if(temp==0)
// 	//    {
// 	//       isPrime=false;
// 	//       break;
// 	//    }
// 	// }
// 	// if(isPrime)
// 	//    console.log(num + " is a Prime Number");
// 	// else
// 	//    console.log(num + " is not a Prime Number");



// var primeCheck = function(val) {

//     let temp;
// 	let isPrime=true;
// 	let num=val;
// 	for(let i=2;i<=num/2;i++)
// 	{
//            temp=num%i;
// 	   if(temp==0)
// 	   {
// 	      isPrime=false;
// 	      break;
// 	   }
// 	}
// 	if(isPrime)
// 	   console.log(num + " is a Prime Number");
// 	else
// 	   console.log(num + " is not a Prime Number");
    
// }
// primeCheck(1)
// primeCheck(2)
// primeCheck(3)
// primeCheck(4)
// primeCheck(5)
// primeCheck(11)