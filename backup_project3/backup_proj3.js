// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

addEmployeesBtn.addEventListener('click', function() {});
//collectEmployees);
// Collect employee data (requires external input)
const collectEmployees = function() {
  //define empolyeeArray as an empty array
  const employeesArray = [];

  //set the user "add more" flag to true for the first time through
  let addNew = true;
  //console.log(addNew);
  // let salaryStrg = 0;
  //console.log(typeof salary);

  // TODO: Get user input to create and return an array of employee objects
//  function nameInput()  {

    //keep doing while user selects to add more employees
    while (addNew)  {
      let firstName = prompt("Enter employee's first name", "first-name");

      let lastName = prompt("Enter employee's last name", "last-name");
      //console.log(empLastName);

      let strgSalary = prompt("Enter employee's salary", "salary");
      
      // unary plus (+) operator method for string to number conversion from
      // https://www.sitepoint.com/convert-string-to-number-javascript/
      let salary = +strgSalary;

      //define object employee
      let employee = {firstName, lastName, salary};
      //push iteration values into array
      employeesArray.push(employee);

    //set "add another" flag to false
    //const doAgain = false;
    //ask user if want to add more employees using confirm/cancel prompt
    let text = "Do you want to add another employee?";
    //check if user confirms adding more, or is done
    if (confirm(text) == true) {
      addNew = true;
    } else {
      addNew = false;
    }
  }
//user input done, return employee list array
//console.log(employeesArray);
return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  //console.log(employeesArray);
  let salarySum = 0;
  for (let i = 0; i < employeesArray.length; i++)  {
  // Repeat iterations while adding each salary with the others
    salarySum += employeesArray[i].salary;
  }
  let averageSalary = salarySum / (employeesArray.length);
  console.log(averageSalary);
  return averageSalary;
}

//console.log("finished",salarySum);



// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
