// Write your solution in this file!


// Function to update employee object without mutation
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update employee object with mutation
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
  return employee;
  }
  // Function to delete key from employee object without mutation
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete key from employee object with mutation
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  // Example employee object
let employee = {
    name: 'John Doe',
    age: 30,
    department: 'IT'
  };
  
  // Example usage of updateEmployeeWithKeyAndValue
  //let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 31);
  console.log(updatedEmployee); // { name: 'John Doe', age: 31, department: 'IT' }
  
  // Example usage of destructivelyUpdateEmployeeWithKeyAndValue
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'department', 'HR');
  console.log(employee); // { name: 'John Doe', age: 30, department: 'HR' }
  
  // Example usage of deleteFromEmployeeByKey
 // let employeeWithoutAge = deleteFromEmployeeByKey(employee, 'age');
  console.log(employeeWithoutAge); // { name: 'John Doe', department: 'HR' }
  console.log(employee); // { name: 'John Doe', age: 30, department: 'HR' }
  
  //Example usage of destructivelyDeleteFromEmployeeByKey
  destructivelyDeleteFromEmployeeByKey(employee, 'department');
  console.log(employee); // { name: 'John Doe', age: 30 }
  
 // Example usage of deleteFromEmployeeByKey
 let employeeWithoutAge = deleteFromEmployeeByKey(employee, 'age');
  console.log(employeeWithoutAge); // { name: 'John Doe', department: 'IT' }
 console.log(employee); // { name: 'John Doe', age: 30, department: 'IT' }
  
  //Example usage of destructivelyDeleteFromEmployeeByKey
  destructivelyDeleteFromEmployeeByKey(employee, 'department');
  console.log(employee); // { name: 'John Doe', age: 30 }
 // Example employee object

  
  // Example usage of destructivelyDeleteFromEmployeeByKey
  let modifiedEmployee = destructivelyDeleteFromEmployeeByKeyReturnValueEmployee(employee, 'age');
  console.log(modifiedEmployee); // { name: 'John Doe', department: 'IT' }
  console.log(employee); // { name: 'John Doe', age: 30, department: 'IT' }
  
  
  // Example usage of updateEmployeeWithKeyAndValue
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 31);
  console.log(updatedEmployee); // { name: 'John Doe', age: 31, department: 'IT' }
  console.log(employee === updatedEmployee); // true (same object reference)
  
  
  