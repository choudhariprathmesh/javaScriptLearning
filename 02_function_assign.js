function fun() {
    console.log("Think Positive");
    console.log("    Feel Positive");
    console.log("       Live Positive");
}
fun()
console.log("==================================================");
function personalDetails(name,lastName,college) {
    console.log("First Name :",name);
    console.log("Last Name :",lastName);
    console.log("Collage :",college);
}
personalDetails("Prathmesh","Choudhari","Fabtech Technical Campus Sangola")
console.log("==================================================");
function swapValuesDude(val1,val2) {
    console.log("******Before Swaping******");
    console.log(val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("******After Swaping******");
    console.log(val1,val2);
}
swapValuesDude("Virat","Anushka")
swapValuesDude(1000,2000)
console.log("==================================================");
function addThreeValues(v1,v2,v3) {
    console.log("After Addition :",v1+v2+v3);
    return v1+v2+v3;
}
addThreeValues(10.23,600,40)
addThreeValues("Hello","Good","Morning")