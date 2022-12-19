console.log("===================================================");
var votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Invalid Data : ${age}`);
    } else {
       if (age>=18) {
        console.log(`You Can Vote,Your Age Is : ${age}`);
       }else{
        console.log(`Sorry You are NotEligible For Vote : ${age}`);
       }
    }
}
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(-10);
votingEligibility(200);
votingEligibility(0);

var marks = function(mark) {
    console.log("-----------------------------------------------");
    if (typeof mark == "number") {
        
        if (mark>=90 && mark<=100) {
            console.log(`Fantastic marks : ${mark},Your grade is A+`);
        }
        if (mark>=75 && mark<90) {
            console.log(`Excellent marks : ${mark},Your grade is A`);
        }
        if (mark>=50 && mark<75) {
            console.log(`Good marks : ${mark},Your grade is B`);
        }
        if (mark>=35 && mark<50) {
            console.log(`Marks : ${mark},Your grade is C,Need improvement`);
        }
        if (mark==29) {
             console.log(`Marks ${mark} You are Fail`);
         }
        if (mark<=0 || mark>100) {
            console.log(`${mark} Please provide the valid marks`);
        }
           }
    else{
            console.log(`"${mark}" Please provide the valid marks`);
    }
}
marks(98)
marks(80)
marks(90)
marks(0)
marks(150)
marks(-7)
marks(35)
marks(29)
marks(64)
marks(49)
marks("91")
marks("Eighty")
console.log("-----------------------------------------------");



