const car = {
    carName:"Creta SX",
    company:"Hundai",
    launchYear:2017
}

const carEngine = {
     enginepower:"1499CC",
     maxPower:"113 BHP"
}
console.log("========================================================================================================");
console.log("Given Object's Is :-");
console.log(car);
console.log(carEngine);
console.log("========================================================================================================");
console.log("Merging Two Object Using Object.assign Method");
console.log(Object.assign(car,carEngine))
console.log("========================================================================================================");
console.log("Merging Two Object Using Spresd Operator");
console.log({...car,...carEngine});