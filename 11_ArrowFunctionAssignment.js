console.log("==================== Arrow Function With No Args And No Return Value ======================");
let arrowfun1 = ()=>{
    console.log("Good Morning, Today is Monday");
}
arrowfun1();
console.log("==================== Arrow Function With 3 Args And No Return Value =======================");
let arrowfun2 = (num1,num2,num3=1)=>{
    console.log("Given Values is :-", num1,num2,num3);
    console.log("After Performing Multiplication :- ",num1*num2*num3);
}
arrowfun2(5,5,2)
console.log("------------------------------------------------------------------------------------------");
arrowfun2(10,4)
console.log("==================== Arrow Function With 5 Args And With Return Value =======================");
let arrowfun3 = (v1,v2,v3,v4,v5)=>{
    console.log("Given Values is :- ",v1,v2,v3,v4,v5);
    return v1+v2+v3+v4+v5;
}
let res=arrowfun3(100,100,200,349,756);
console.log("After Performing Addition :- ",res);
console.log("------------------------------------------------------------------------------------------");
let res1=arrowfun3("I am"," learning"," ES6"," features"," in depth");
console.log("After Performing Addition :- ",res1);











