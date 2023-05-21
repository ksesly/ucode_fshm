let fName;  
let lName;  
let err = true;

function errorOutput() {
    err = true;
    alert('Wrong input!');
    console.log('Wrong input!');
}

function forFirstName() {
    err = false;
    fName = prompt('Give me your first name', '');
    if (fName === null || fName === undefined) {
        errorOutput();
        return;
    }
    for (let i = 0; i < fName.length; i++) {
        if (!isNaN(fName.charAt(i))) {
            errorOutput();
            return;
        }
    }
}

function forLastName() {
    err = false;
    lName = prompt('Give me your last name', '');
    if (lName === null || lName === undefined) {
        errorOutput();
        return
    }
    for (let i = 0; i < lName.length; i++) {
        if (!isNaN(lName.charAt(i))) {
            errorOutput();
            return;
        }
    }
}

function output(firstName, lastName) {
    let resFirstName = firstName.charAt(0).toUpperCase() + firstName.substring(1);
    let resLastName = lastName.charAt(0).toUpperCase() + lastName.substring(1);
    
    console.log(`Hello, ${resFirstName} ${resLastName}`);
    alert(`Hello, ${resFirstName} ${resLastName}!`);
}

while (fName === null || err) {
    forFirstName();
}
while (lName === null || lName === undefined || err) {
    forLastName();
}

if (!err)
    output(fName, lName);