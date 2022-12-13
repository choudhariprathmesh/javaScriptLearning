var square=function(num){
    result=num*num;
    console.log("The Square Of",num,"=",result);
}
square(5);
square(6);
square(25);
square(100);
console.log("=========================================");
console.log("The variable is :",typeof square);
console.log("=========================================");
var arectangle=function(length,width) {
    console.log("Area Of Rectangle Is")
    console.log("length * width");
    console.log(length ,"*", width);
    console.log(length * width);
}
arectangle(499,917);
console.log("=========================================");
 var swapValues=function(val1,val2) {
    console.log("******Before Swaping******");
    console.log(val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("******After Swaping******");
    console.log(val1,val2);
}
swapValues("Virat","Anushka")
swapValues(1000,2000)
console.log("=========================================");
var name="JS the most popular language";
console.log("Given String Is :",name);
console.log("Total Character Available In The String Is :",name.length);
console.log("Character At index 6 Is : ", name.charAt(6));
console.log("Character At index 11 Is : ", name.charAt(11));
var len=name.length;
console.log("Character At Last Index : ", name.charAt(len-1));
console.log("First Character Form Given String Is : ", name.charAt(0));
console.log("Total Length Of String Is :",name.length);
console.log("Square of String Length Is :",name.length*name.length);