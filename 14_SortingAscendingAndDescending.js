class Employee{
    constructor(empid,empName,empDept,empSalary,empCompany){
        this.empid=empid;
        this.empName=empName;
        this.empDept=empDept;
        this.empSalary=empSalary;
        this.empCompany=empCompany;
    }
}
const empAnil=new Employee(22,"Anil","IT",50000,"TCS");
const empRadha=new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const empSonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const empMonika=new Employee(77,"Monika","IT",40000,"Wipro");
const empViny=new Employee(88,"Vinayak","IT",75000,"TCS");
const empMahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const empArray=[empAnil,empRadha,empRishi,empSonali,empMonika,empViny,empMahi]
console.log("==============================================");
console.log("Sorting Ascending Array BY ID :- ");
empArray.sort((emp1,emp2)=>{
    return emp1.empid>emp2.empid?1:-1;
})
empArray.forEach((value)=>{
    console.log(value.empid,value.empName,value.empDept);
})
console.log("==============================================");
console.log("Sorting Ascending Array BY Dept :- ");
empArray.sort((emp1,emp2)=>{
    return emp1.empDept>emp2.empDept?1:-1;
})
empArray.forEach((value)=>{
    console.log(value.empid,value.empDept,value.empCompany);
})
console.log("==============================================");
console.log("Sorting Descending Array BY Salary :- ");
empArray.sort((emp1,emp2)=>{
    return emp1.empSalary<emp2.empSalary?1:-1;
})
empArray.forEach((value)=>{
    console.log(value.empName,value.empSalary,value.empCompany);
})

console.warn("hello World")


 function find_max(nums) {
     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     for (let num of nums) {
     if (num > max_num) {
     // (Fill in the missing line here)
     }
     }
     return max_num;
     }
    