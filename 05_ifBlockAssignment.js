var agecheck = function(val1) {
    console.log("-----------------------------------------");
    if (val1>=18 && val1<=100) {
        console.log(`${val1} You are Eligible for voting`);
    }
    if (val1<=17 || val1>100) {
        console.log(`${val1} You are NotEligible for voting`);
    }
}
agecheck(45)
agecheck(17)
agecheck(8)
agecheck(20)
agecheck(-10)
agecheck(200)
agecheck(0)
console.log("=============================================================");
var gradecalculation = function(num) {
    if (num>=90) {
        console.log(`Fantastic marks : ${num},Your grade is A+`);
    }
    if (num>=75 && num<90) {
        console.log(`Excellent marks : ${num},Your grade is A`);
    }
    if (num>=50 && num<75) {
        console.log(`Good marks : ${num},Your grade is B`);
    }
    if (num>=35 && num<50) {
        console.log(`Marks : ${num},Your grade is C,Need improvement`);
    }
    if (num<=0 || num>100) {
        console.log(`${num} Please provide the valid marks`);
    }
}
gradecalculation(98);
gradecalculation(80);
gradecalculation(90);
gradecalculation(0);
gradecalculation(150);
gradecalculation(-7);
gradecalculation(35);
gradecalculation(29);
gradecalculation(64);
gradecalculation(49);