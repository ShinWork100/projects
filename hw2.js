var employees = [];


function genNum() {
    return Math.floor(Math.random() * (99999999 - 10000000)) + 10000000;
}
// generating the id number 
function getId() {
    var z = genNum();
    var i;
    for (i = 0; i < employees.length; i++) {
        if (employees[i].idNum == z) {
            z = genNum();
        }
    }
    return z;
}

function getTime() {
    var d = new Date();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // document.getElementById("demo").innerHTML = days[d.getDay()];
    return days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear();
}

function submitNames() {
    'use strict';
    var realTime = getTime();
    var firstName = document.getElementById('inputFirst').value;
    var lastName = document.getElementById('inputLast').value;
    var idNum = getId();
    var e = document.getElementById("Department");
    var depart = e.options[e.selectedIndex].value;

    //   var tempStr = '{"firstName":"'+firstName+'","lastName":'+lastName+'","idNumber":'+idNum+'"}';

    var obj = {
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        department: depart,
        date: realTime
    };
    employees.push(obj);
    console.log(employees);


    document.getElementById("demo").innerHTML = "Name: " + employees[employees.length - 1].lastName + " " +
        employees[employees.length - 1].firstName + " " + "<br /> " +
        "Department: " + employees[employees.length - 1].department + "<br />" +
        "Employee ID: " + employees[employees.length - 1].idNum + "<br />" +
        "Hire Date: " + employees[employees.length - 1].date + "<br />" +
        "Total Employees: " + employees.length + "<br />";

    return false;
}

function init() {
    'use strict';

    document.getElementById('theForm').onsubmit = submitNames;

} // End of init() function.
window.onload = init;