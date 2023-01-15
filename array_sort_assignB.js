class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_sonali = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "Vinay", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 75000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_sonali, emp_monika, emp_vinay, emp_mahi];
console.log(`---------Sort the 'array_employees' in ascending order of Employee Id's and log employee details → Id, Name, Department-----------`)
array_employees.sort((emp1, emp2) => {
    return emp1.emp_id > emp2.emp_id ? 1 : -1;
})

array_employees.forEach((currentvalue) => {
    console.log(currentvalue.emp_id, currentvalue.emp_name, currentvalue.emp_dept);
})

console.log(`----------Sort the array employees' in ascending order of employee department & log Id, dept, & Company----------`)
array_employees.sort((emp1, emp2) => {
    return emp1.emp_dept > emp2.emp_dept ? 1 : -1;
})
array_employees.forEach((currentvalue) => {
    console.log(currentvalue.emp_id, currentvalue.emp_dept, currentvalue.emp_company);
})

console.log(`----------Sort the employee array in descending order of employee salary and log Name, Salary & Company----------`)
array_employees.sort((emp1, emp2) => {
    return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
})
array_employees.forEach((currentvalue) => {
    console.log(currentvalue.emp_name, currentvalue.emp_salary, currentvalue.emp_company);
})
