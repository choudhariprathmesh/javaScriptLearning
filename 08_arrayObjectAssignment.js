console.log("========================================================================================================================================");
console.log("Given Class Object Data Is :-");
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
console.log(axisBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panjabBank);
console.log("====================================== Printing Bank name & Location Using For Of Loop ==================================================");
const bankArray = [axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, panjabBank]
for (const iterator of bankArray) {
    console.log(`Bank Name Is :- "${iterator.bankName}" And Location Of Bank Is :- "${iterator.location}"`);
}
console.log("====================================== Printing Kotak Bank Details Using For Of Loop ====================================================");
for (const iterator of bankArray) {
    if (iterator == kotakBank) {
        console.log(iterator);
    }
}
console.log("====================================== Printing Bank Details Using For Loop =============================================================");
for (let index = 0; index < bankArray.length; index++) {
    const element = bankArray[index];
    console.log(element);
}


