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
console.log("=========================================== TCS Employee Details =========================================");
empArray.forEach((emp)=>{
    if (emp.empCompany=="TCS") {
        console.log(`EmpName :- ${emp.empName}, EmpCompany :- ${emp.empCompany}`);
    }    
})
console.log("====================== Employees Salary Grater Than 50000 With All Details ================================");

empArray.forEach(emp=>{    
    if (emp.empSalary>=50000) {
        console.log(emp);
    }
})
console.log("========================================= Sum Of All Employees Salary ======================================");
let sum=0;
empArray.forEach(emp=>{
    let res=emp.empSalary;
    sum+=res;
})
console.log("Sum Of All Employees Salary Is :- ",sum,"INR");
console.log("============================================ Average Salary ================================================");
console.log("Average Salary Of Employees :- ",sum/7,"INR");
console.log("====================== Employee Dept IT or HR And Whose Salary Grater Than 75000 ===========================");

empArray.forEach(emp=>{
    if ((emp.empDept=="IT" || emp.empDept=="HR") && emp.empSalary>=75000) {
        console.log(emp);
    }
})








