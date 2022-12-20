var monthYear = function (month) {
  switch (month) {
    case 1:
      console.log(`"${month}" This Month is January`);
      break;
    case 2:
      console.log(`"${month}" This Month is February`);
      break;
    case 3:
      console.log(`"${month}" This Month is March`);
      break;
    case 4:
      console.log(`"${month}" This Month is April`);
      break;
    case 5:
      console.log(`"${month}" This Month is May`);
      break;
    case 6:
      console.log(`"${month}" This Month is June`);
      break;
    case 7:
      console.log(`"${month}" This Month is July`);
      break;
    case 8:
      console.log(`"${month}" This Month is Augest`);
      break;
    case 9:
      console.log(`"${month}" This Month is September`);
      break;
    case 10:
      console.log(`"${month}" This Month is October`);
      break;
    case 11:
      console.log(`"${month}" This Month is November`);
      break;
    case 12:
      console.log(`"${month}" This Month is December`);
      break;
    default:
      console.log(`"${month}" is Invalid,Please Enter a Valid Month From 1 To 12`);
      break;
  }
};
monthYear();
monthYear(2);
monthYear(5);
monthYear(12);
monthYear(15);
monthYear(100);
console.log("=========================================================================");

console.log("***1***");
for (let index = 5; index <=15; index++) {
    console.log(index);;
    
}
console.log("--------------------------------------------------------");
console.log("***2***");
for (let index = 50; index >=40; index--) {
    console.log(index);;
    
}
console.log("--------------------------------------------------------");
console.log("***3***");
for (let index = 1; index <=29; index=index+2) {
    console.log(index);;
    
}
console.log("--------------------------------------------------------");
console.log("***4***");
for (let index = 0; index <=18; index=index+2) {
    console.log(index);;
    
}
console.log("--------------------------------------------------------");
console.log("***5***");
for (let index = 5; index <=50; index=index+5) {
    console.log(index);;
    
}
console.log("--------------------------------------------------------");
console.log("***6***");
for (let index = 10; index <=100; index=index+10) {
    console.log(index);;
    
}
console.log("--------------------------------------------------------");
console.log("***7***");
for (let index = 100; index >=10; index=index-10) {
    console.log(index);;
    
}