console.log("========================================================================================================================================");
console.log("Object Has been Created Using Map");
console.log("========================================= Traversing The Map() using For of Loop ===========================================================");
class bank {
    constructor(bankName, location, accountNum, ifscCode, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNum = accountNum;
        this.ifscCode = ifscCode;
        this.interestRate = interestRate;
    }
}
let axisBank = new bank("Axis Bank", "Pune", 33216598798, "AXB0002718", "8.3%");
let sbiBank = new bank("State Bank Of India", "Mumbai", 44316566798, "SBI0002853", "7.5%");
let iciciBank = new bank("ICICI Bank", "Sangola", 43216998000, "ICICI0952714", "6.8%");
let kotakBank = new bank("Kotak Bank", "Wakad", 53216963708, "KTK0085267", "8%");
let hdfcBank = new bank("HDFC Bank", "Bangalore", 78966598798, "HDFC0992710", "8.9%");
let panjabBank = new bank("Panjab Bank", "Panjab", 78998598798, "PJ2772710", "7%");
const mapOfBank=new Map();
mapOfBank.set(33216598798,axisBank)
mapOfBank.set(44316566798,sbiBank)
mapOfBank.set(43216998000,iciciBank)
mapOfBank.set(53216963708,kotakBank)
mapOfBank.set(78966598798,hdfcBank)
mapOfBank.set(78998598798,panjabBank)
const keysOfBank=mapOfBank.keys();
for (const iterator of keysOfBank) {
    const bank =mapOfBank.get(iterator);
    console.log(`Bank Name Is :- "${bank.bankName}" Account Nunmer Is :- "${bank.accountNum}" And Interest Rate Is :- "${bank.interestRate}"`);
    
}