function squareOfWordLength(word) {
    var res=word.length
    console.log(`Length of ${word} is : ${res}`);
    var square=res*res;
    console.log(`Square of length is :${square}`);
}
squareOfWordLength("javaScript");
console.log("=================================");
squareOfWordLength("Google Chrome");
console.log("=================================");
squareOfWordLength("Developer Smart");
console.log("=================================");
var dev = function() {
    var res = "I am Angular Developer"
    console.log(res);
    var res1 = res.length;
    console.log(`Total length of given string is : ${res1}`);
    var word =res.split(" ");
    console.log(`Total word of given string is : ${word.length}`);
    console.log(`The total length of string divide by total word in string is : ${res1/word.length}`);
    console.log(`The total length of string multiply by total word in string is : ${res1*word.length}`);
}
dev();