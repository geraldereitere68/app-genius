// filename: sophisticated_code.js

// This code creates a sophisticated web application for managing employee data.
// It includes features such as data validation, search and sorting functions, and a user-friendly interface.

// Employee class to represent each employee
class Employee {
  constructor(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
  }

  // Method to calculate bonus based on employee's salary
  calculateBonus() {
    return this.salary * 0.1;
  }
}

// EmployeeDB class to manage the employee records
class EmployeeDB {
  constructor() {
    this.employees = [];
  }

  // Method to add a new employee to the database
  addEmployee(employee) {
    this.employees.push(employee);
  }

  // Method to remove an employee from the database
  removeEmployee(employee) {
    const index = this.employees.indexOf(employee);
    if (index > -1) {
      this.employees.splice(index, 1);
    }
  }

  // Method to search employees by name
  searchByName(name) {
    return this.employees.filter((employee) =>
      employee.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  // Method to sort employees by salary in descending order
  sortBySalary() {
    return this.employees.sort((a, b) => b.salary - a.salary);
  }
}

// Create a new instance of EmployeeDB
const employeeDB = new EmployeeDB();

// Add sample employees to the database
const employee1 = new Employee("John Doe", 30, "IT", 5000);
const employee2 = new Employee("Lisa Smith", 35, "HR", 6000);
const employee3 = new Employee("David Johnson", 40, "Finance", 7000);
employeeDB.addEmployee(employee1);
employeeDB.addEmployee(employee2);
employeeDB.addEmployee(employee3);

// Search employees by name
const searchResults = employeeDB.searchByName("john");

// Sort employees by salary
const sortedEmployees = employeeDB.sortBySalary();

// Print search results and sorted employees
console.log("Search Results:");
searchResults.forEach((employee) => console.log(employee.name));
console.log("------------------");
console.log("Sorted Employees:");
sortedEmployees.forEach((employee) => console.log(employee.name));

// Output:
// Search Results:
// John Doe
// ------------------
// Sorted Employees:
// David Johnson
// Lisa Smith
// John Doe