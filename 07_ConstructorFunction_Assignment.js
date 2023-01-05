console.log("================================================================================================================");
function bank(bankName,location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
let sbi=new bank("State Bank Of India","Pune","SBI0271548",1002)
let yes=new bank("YES Bank","Mumbai","YES0276648",3502)
let axis=new bank("AXIS Bank","Sangola","AXS0200548",3212)
let mhb=new bank("Maharashtra Bank","Pune","MHB0001548",1668)
console.log(`Bank Details Is :- 'Bank Name : ${sbi.bankName}, Location : ${sbi.location}, IFSCCode : ${sbi.ifscCode}, BranchCode : ${sbi.branchCode}'`);
console.log(`Bank Details Is :- 'Bank Name : ${yes.bankName}, Location : ${yes.location}, IFSCCode : ${yes.ifscCode}, BranchCode : ${yes.branchCode}'`);
console.log(`Bank Details Is :- 'Bank Name : ${axis.bankName}, Location : ${axis.location}, IFSCCode : ${axis.ifscCode}, BranchCode : ${axis.branchCode}'`);
console.log(`Bank Details Is :- 'Bank Name : ${mhb.bankName}, Location : ${mhb.location}, IFSCCode : ${mhb.ifscCode}, BranchCode : ${mhb.branchCode}'`);
console.log("================================================================================================================");
bank.prototype.openTime = "9 AM IST";
bank.prototype.closeTime = "6 PM IST";
console.log(`Open and Close Time of "State Bank Of India" :- ${sbi.openTime} 'To' ${sbi.closeTime}`);
console.log("------------------------------------------------------------------------------");
console.log(`Open and Close Time of "AXIS Bank" :- ${axis.openTime} 'To' ${axis.closeTime}`);
console.log("------------------------------------------------------------------------------");
console.log(`Open and Close Time of "Maharashtra Bank" :- ${mhb.openTime} 'To' ${mhb.closeTime}`);
console.log("================================================================================================================");
console.log(`Bank Details :- "Bank Name : ${yes.bankName}, BranchCode : ${yes.branchCode}" Open Time Of YES Bank Is : ${yes.openTime}`);
console.log("------------------------------------------------------------------------------");