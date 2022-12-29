class Employee{
    constructor(name,age,id,city){
        this.name=name;
        this.age=age;
        this.id=id;
        this.city=city;


    }
}
let empSmith = new Employee("Smith", 33, 26, "Delhi");
let empJay = new Employee("Jay", 3000, 21, "Pune");
let empBill = new Employee("Billgates", 5000, 58, "USA");
console.log(empSmith);
console.log(empJay);
console.log(empBill);
