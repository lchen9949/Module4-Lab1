// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
var $ = function (id) {
    return window.document.getElementById(id);
}
var form, table;
form = $("addForm");
table = $("employees");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
var totalEmployee = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    var empId = $("id").value;
    var fulName = $("name").value;
    var extenDigit = $("extension").value;
    var email = $("email").value;
    var department = $("department").value;
    var html = "";

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellEmpId = row.insertCell();
    let cellFulName = row.insertCell();
    let cellExtenDigit = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDelete = row.insertCell();
    
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellEmpId.appendChild(document.createTextNode(empId));

    cellFulName.appendChild(document.createTextNode(fulName));

    cellExtenDigit.appendChild(document.createTextNode(extenDigit));

    cellEmail.appendChild(document.createTextNode(email));

    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    //deleteButton.className = "deleteButton";
    cellDelete.appendChild(deleteButton);

    deleteButton.onclick = function () {
        table.deleteRow(row.rowIndex);
        totalEmployee -=1;
        $("empCount").textContent = "The total employee number is " + totalEmployee;
    }
    

    // RESET THE FORM
    form.reset();
    
    // SET FOCUS BACK TO THE ID TEXT BOX
    $("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
        totalEmployee +=1;
        $("empCount").textContent = "The total employee number is " + totalEmployee;

});

// DELETE EMPLOYEE

