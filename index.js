const employee = {
  name: "Barry",
  streetAddress: "11 Big Baz Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

const employeeTwo = updateEmployeeWithKeyAndValue(employee, 'name', 'Sam', 'streetAddress', '11 zbroadway');

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

const employeeThree = destructivelyUpdateObject(employee, 'name', 'Sam', 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key){
const employeeFour = Object.assign({}, employee);
delete employeeFour.name;
return employeeFour;

}

function destructivelyDeleteFromEmployeeByKey (employee, key){
    // const employeeFive = Object.assign({}, employee);

    delete employee.name;
  
    return employee;
  }

  // function deleteFromEmployeeByKey(employee, key);{
  //   const newEmployee = Object.assign({}, employee);
  //   delete employee.name;
  //   return newEmployee;
  //   }


