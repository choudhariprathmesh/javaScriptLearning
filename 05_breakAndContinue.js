var i =0;
while (i<=10) {
    console.log(i);
    if (i==5) {
        break;
    }
    i++;
}


var index = 0;
while (index<=10) {
   console.log(index);// 0 1
   if (index==5) {
     break;
   } 
   index++;
}

for (let index = 0; index < 20; index++) {
   console.log(index);
   if (index>=12) {
     break;
   }
    
}
console.log("==============continue==========================");

for (let index = 0; index < 6; index++) {
    //console.log(index); // 0 1  2 3
    if (index==3) {
      continue;
    }
    console.log(index);
 
 }
 

