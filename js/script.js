// JavaScript Basics

const myVar = "Welcome to JavaScript Basics";
// document.write(myVar);
// alert(myVar);

const a = 20;

if (a === 10) {
    document.write("a value is 10");
} else {
    document.write("a value is NOT 10");
}

// Declaration of function
function myFunction() {
    document.write("<br> Code execution of function.")
}
// Call to the function
myFunction();

// Creation of an object
const person = {
    firstName: "Osvaldo",
    lastName: "Salomon",
    height: 5.9,
    age: 19
};

document.write("<br>" + person.firstName + "<br>");
document.write(person.lastName + "<br>");
document.write(person.height + "<br>");
document.write(person.age + "<br>");


