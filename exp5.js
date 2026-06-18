// Array to store employee data objects
// Array to store employee data
let employees = [];

// ADD
function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("empId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    if (!name || !id || !salary || !dept) {
        alert("Fill all fields");
        return;
    }

    employees.push({ name, id, salary, dept });

    //document.getElementById("output").innerHTML =
        //"<p style='color:green;'>Employee Added Successfully ✅</p>";
        alert("Employee Added Successfully ✅");

    // clear
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

// DISPLAY
function displayAll() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "No employees added.";
        return;
    }

    let result = "<h3>All Employees:</h3>";

    employees.forEach(emp => {
        result += `
        <p>
        ${emp.name} | ${emp.id} | ${emp.salary} | ${emp.dept}
        </p>`;
    });

    document.getElementById("output").innerHTML = result;
}

// FILTER
function salaryFilter() {
    let filtered = employees.filter(e => e.salary > 50000);

    let result = "<h3>Salary > 50000:</h3>";

    filtered.forEach(e => {
        result += `<p>${e.name} - ${e.salary}</p>`;
    });

    document.getElementById("output").innerHTML = result || "No data";
}

// TOTAL
function totalSalary() {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);

    document.getElementById("output").innerHTML =
        `<h3>Total Salary: ${total}</h3>`;
}

// AVERAGE
