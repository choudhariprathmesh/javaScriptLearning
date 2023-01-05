const personalDetails={
    name: "prathmesh Choudhari",
    mobileNumber:"9767262937",
    email:"prathmeshchoudhari07@gmail.com"
}

const collageDetails={
    collage: "FTC Sangola",
    degree: "B-Tech",
    location:"Sangola"
    
}
console.log("================================================= Personal Details =============================================================");
console.log(personalDetails);
console.log("================================================= Collage Details =============================================================");
console.log(collageDetails);
console.log("================================================= After Mergeing Two Objects =============================================================");
Object.assign(personalDetails,collageDetails)
console.log(personalDetails);
console.log("================================================ Creating friends Name Array & freezing it ======================================================");

const friends = [ "Dev","Ram","Shyam","Jay","cherry" ];
console.log(friends);
console.log("=============================================== Printing Friends Array Using For Of Loop ===========================================================");
for (const iterator of friends) {
    console.log(iterator);
}
Object.freeze(friends)
console.log("=============================================== Printing Reverse String ===========================================================");
var company="CodeMind Technology"
console.log(`Given String :- ${company}`);
let Reverse="Technology" 
 let strresult=Reverse.split("").reverse().join("");
 console.log(`After Reversing "Technology" Word :- CodeMind ${strresult}`); 


