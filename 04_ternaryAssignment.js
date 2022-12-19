console.log("-----------------------------------------------------------------");
var interviewCheck = function (val1, val2, val3, name) {
    var result = val1 >= 70 || val2 >= 80 || val3 >= 90 ? `Congrates "${name}" you are elibible for TCS interview ` : `Sorry "${name}" Unfortunately you are not eligible for interview`;
    // console.log(result);
    return result;
}
console.log(interviewCheck(80, 86, 90, "Prathmesh"));
console.log(interviewCheck(70, 65, 55, "Shyam"));
console.log(interviewCheck(60, 79, 88, "Ram"));
var check = function (val1, val2) {
    var res = val1 == val2;
    // console.log(`Result between ${val1} == '${val2}' is : ${res}`);
    console.log("-----------------------------------------------------------------");
    return res;
}
console.log(`The result between ( 0 == '' ) is : ${check(0, ' ')}`);
console.log(`The result between ( 0 == '0' ) is : ${check(0, '0')}`);
console.log(`The result between ( 0 == false ) is : ${check(0, 'false')}`);
console.log(`The result between ( null == undefined ) is : ${check(null, undefined)}`);
console.log(`The result between ( 1 == [1] ) is : ${check(1, [1])}`);
console.log(`The result between ( 1 == true ) is : ${check(1, true)}`);
console.log(`The result between ( 1 == '1' ) is : ${check(1, '1')}`);
