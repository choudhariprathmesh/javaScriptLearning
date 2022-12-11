console.log("------------------Bank Details------------------");
function bankDetails(bankName,accountNum,location,pincode,accountStatus) 
{
    console.log("Bank Name :",bankName);
    console.log("Account Number :",accountNum);
    console.log("Bank Location :",location);
    console.log("Pincode :",pincode);
    console.log("Account Status :",accountStatus);
    console.log("=======================================================");
}
bankDetails("CITI Bank",3456782345,"Pune",431202,"-");
bankDetails("Axis Bank",7856782345,"Mumbai",441202,"-");
bankDetails("HDFC Bank",8956782345,"Pune",631202,"Open");
