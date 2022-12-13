console.log(`================================================`);
var company=`My Dream Company is : "Google"`;
console.log(company);
console.log(`================================================`);
hobby1="Reading Books"
hobby2=" Bike Racing"
hobby3=" Exploring New Things"
var hobbies="(With the use of variable substitution) My Hobbies are : " + hobby1 + hobby2 + hobby3;
console.log(hobbies);

function stringTemplate(hobby1,hobby2,hobby3) {
    var hobbies1=`(With the use of string templaes) My Hobbies are : ${hobby1} ${hobby2} ${hobby3}`
    console.log(hobbies1);
    
}
stringTemplate ("Reading Books"," Bike Racing"," Exploring New Things")

console.log(`================================================`);
var string="   Hey you are doing good, keep it up    ";
console.log("Given String is :",string);
console.log("Total length of string is :",string.length);
var res=string.trim();
console.log("After removing extra spaces string is :",res);
console.log("Total length of string after removing spaces is :",res.length);
var totalLength=res.length;
console.log("First character of string is",res.charAt(0),"and last character of string is",res.charAt(totalLength-1));
var word=res.split(" ");
console.log("Total words in string is :", word.length);
console.log("The index of good is :",res.indexOf("good"));
console.log("The index of 22 using substring() is :",res.substring(22));
console.log("The index of 22 using slice() is :",res.slice(22));
console.log("The string ends with up is :",res.includes("up"));
console.log("The string starts with Hey is :",res.includes("Hey"));