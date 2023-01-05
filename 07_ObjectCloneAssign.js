const arrayNums = [20,3,4,56,90,400,49]
console.log("==================================================================");
console.log(`Given Array Is :- ${arrayNums}`);
let cloneArray = arrayNums;
cloneArray.push(55,56)
console.log("====================================== After Shallow Cloning Original & Cloned Array's ============================");
console.log(arrayNums);
console.log(cloneArray);
console.log("===================================================================================================================");
console.log(`Given Array Is :- ${arrayNums}`);
console.log("====================================== After Deep Cloning Original & Cloned Array's ============================");
let deepCloneArray = [...arrayNums];
deepCloneArray.push(10,25);
console.log(arrayNums);
console.log(deepCloneArray);
console.log("===================================================================================================================");
console.log("Array Before Mearge");
console.log(arrayNums);
let arrayEven = [2,30,14,8]
console.log(arrayEven);
console.log("Array After Mearge");
let meargTwoArray =[...arrayNums,...arrayEven]
console.log(meargTwoArray);
console.log("===================================================================================================================");
const employee_info = {
    emp_id:27,
    emp_name:"John Doe",
    salary:{
        July_month:"40,0000INR",
        aug_month:"50,0000INR",
        jun_month:"65,0000INR"
    },
    address:{
        locality:{
            colony:"OM Vrindaven Society",
            street:"Kanch Pokli,431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India"
    },
    mobiles:["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}

console.log("Address Of John Doe Is :- ",employee_info.address.locality.colony,employee_info.address.locality.street,employee_info.address.city,employee_info.address.state,employee_info.address.country);
console.log("===================================================================================================================");
console.log("Mobile Numbers Of John Doe Is :-");
for (const iterator of employee_info.mobiles) {
    console.log(iterator);    
}
// console.log(employee_info.mobiles);
console.log("===================================================================================================================");
let empDeepClone= JSON.parse(JSON.stringify(employee_info));
empDeepClone.salary.July_month="80k";
console.log("----------- Before Cloning Original Salary --------------");
console.log(employee_info.salary);
console.log("-------------- After Cloning Salary Is:- -------------------");
console.log(empDeepClone.salary);
console.log("===================================================================================================================");
console.log("----------- Before Cloning Original Address --------------")
console.log(employee_info.address);
console.log("----------- After Cloning Address --------------")
employee_info.address.country="United Kingdom";
console.log(employee_info.address);





