var great = function(val1,val2) {
    var res=val1>val2 ? val1 :val2;
    console.log(`The grater numbers between "${val1}" and "${val2}" is: ${res}`);
}
great(10,-10)
great(800,899)
console.log("===================================================================");
var evenOdd =function(val1) {
    var res1=val1%2==0 ? "EVEN" : "ODD";
    console.log(`The number "${val1}" is : ${res1}`);
}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);
console.log("===================================================================");
var evenOddLength =function(val1) {
    var res1 =val1.length;
    var result=res1%2==0 ? "EVEN" : "ODD";
    console.log(`The given string "${val1}" is : ${result}`);
}
evenOddLength("javaScript")
evenOddLength("developer")
evenOddLength("Google")
console.log("===================================================================");
var maleMarriageEligibility=function(gender,age,name) {
    var res=(gender=="male" && ( age>=21)) ? "Eligible" : "NotEligible";
    console.log(`Hey "${name}" you are ${res} for marriage`);
}
maleMarriageEligibility("male",25,"Billgates");
maleMarriageEligibility("male",17,"Stew Jobs");
console.log("===================================================================");
var girlMarriageEligibility=function(gender,age,name) {
    var res=(gender=="female" && ( age>=18)) ? "Eligible" : "NotEligible";
    console.log(`Hey "${name}" you are ${res} for marriage`);
}
girlMarriageEligibility("female",16,"Jenifer")
girlMarriageEligibility("female",27,"Malinda Gates")