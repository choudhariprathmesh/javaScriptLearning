console.log("===================================================================================");
var sentence = function (val) {
    var counter = 0;
    for (let index = 0; index < val.length; index++) {
        var char = val.charAt(index);
        var charcopy = char.toLowerCase();
        if (charcopy == 'a') {
            // console.log(char);
            counter = counter + 1;
        }
    }
    console.log(`The Given String Is :- '${val}'`);
    console.log(`Total Count Of "a or A" In Given String is : ${counter}`);
}
sentence("I AM Learning JavaScript,The Language of internet");
console.log("-----------------------------------------------------------------------------------");
sentence("My favourite movie is LAggAn");