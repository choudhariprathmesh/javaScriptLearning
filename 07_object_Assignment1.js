const professor = {
    name:"Raut.M",
    age:"30",   
    location:"Sangola",
    subject:"Electronics",
    degree : {
        degrees1:"Engineering",
        degrees2:" B-Tech",
        degrees3:" M-Tech",
        degrees4:" PHD In AdvProgramming",
        add: function() {
            return this.degrees1 + this.degrees2 + this.degrees3 + this.degrees4;
        }
    },
    certificates:{
        certificate1:"Hacker Rank",
        certificate2:"IFE Course",
        certificate3:"Adv Java Programming"
   
    }
}
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("professor Details :- ");
console.log(professor);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("Adding Nested Object Is Degree :- ");
console.log(professor.degree);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("Adding Nested Object Is Certificates :- ");
console.log(professor.certificates);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("Total Concat Of Degree :- ");
const total = professor.degree.add();
console.log(total);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("Adding New Property In professor Object :- ");
professor.height=60;
console.log(`Height : ${professor.height}`);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log("Modifying Age Element '30 to 35'");
professor.age=35;
console.log(professor);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log(`Deleting an Property into an Certificates Object`);
console.log(professor.certificates);
delete professor.certificates.certificate3;
console.log(professor.certificates);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log(`Adding an Property into an Certificates Object`);
console.log(professor.certificates);
professor.certificates.certificate3="Programming";
console.log(professor.certificates);
console.log("--------------------------------------------------------------------------------------------------------------------");
console.log(`Nested Object Certificates`);
console.log(professor.certificates);