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
console.log("========================== Wipro Employee Details =====================================");
const empFilter=empArray.filter((emp)=>{
    return emp.empCompany=="Wipro";
})
empFilter.forEach((element)=>{
    console.log("Employee Details :-",element);
})
console.log("========================== IT or HR Employee Details =====================================");
const empFilterDept=empArray.filter((emp)=>{
    return emp.empDept =="IT" || emp.empDept=="HR";
})
empFilterDept.forEach((element)=>{
    console.log("Employee Details :-",element);
})
console.log("========================== Employee ID Grater Than 50 Details =====================================");
const empFilterId=empArray.filter((emp)=>{
    return emp.empid>50;
})
empFilterId.forEach((element)=>{
    console.log("Employee ID Details :-",element);
})
console.log("========================== Employee Name Starts With A,V,M Details =====================================");
const FilterName=empArray.filter((emp)=>{
    return emp.empName;
})
FilterName.forEach((element)=>{
    if (element.empName.startsWith("A") || element.empName.startsWith("V") || element.empName.startsWith("M")){
        console.log(element.empName);
    }
})
console.log("========================== Average Salary Of Employees =====================================");

const empFilterSal=empArray.filter((emp)=>{
    return emp.empSalary;
})
sum=0;
empFilterSal.forEach((element)=>{
    // console.log("Employee ID Details :-",sum=sum+element.empSalary);
    sum=sum+element.empSalary;
})
console.log("Average Salary Of Employees :- ",sum/7);
console.log("========================== Average Salary Of IT Employees =====================================");
const empFilterDeptIt=empArray.filter((emp)=>{
    return emp.empDept =="IT";
})
sum1=0;
empFilterDeptIt.forEach((element)=>{
    sum1=sum1+element.empSalary;
})
console.log("Average Salary Of IT Employees :- ",sum1/3);

















