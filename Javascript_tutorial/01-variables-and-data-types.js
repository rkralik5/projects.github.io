// 01 - Variables and Data Types
// This script demonstrates different variable declarations and data types

console.log("=== Variables and Data Types ===");

// Variable declarations
var oldWay = "This is the old way (avoid using var)";
let modernWay = "This is the modern way";
const constantValue = "This value cannot be changed";

console.log(oldWay);
console.log(modernWay);
console.log(constantValue);

// Data Types
console.log("\n--- Data Types ---");

// Numbers
let age = 25;
let price = 19.99;
let negative = -10;

console.log("Age:", age, "Type:", typeof age);
console.log("Price:", price, "Type:", typeof price);
console.log("Negative:", negative, "Type:", typeof negative);

// Strings
let firstName = "John";
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`; // Template literal

console.log("First Name:", firstName, "Type:", typeof firstName);
console.log("Last Name:", lastName, "Type:", typeof lastName);
console.log("Full Name:", fullName, "Type:", typeof fullName);

// Booleans
let isStudent = true;
let isTeacher = false;

console.log("Is Student:", isStudent, "Type:", typeof isStudent);
console.log("Is Teacher:", isTeacher, "Type:", typeof isTeacher);

// Undefined and Null
let undefinedVariable;
let nullVariable = null;

console.log("Undefined:", undefinedVariable, "Type:", typeof undefinedVariable);
console.log("Null:", nullVariable, "Type:", typeof nullVariable);

// Arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

console.log("Fruits:", fruits, "Type:", typeof fruits);
console.log("Numbers:", numbers, "Type:", typeof numbers);

// Objects
let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

console.log("Person:", person, "Type:", typeof person);
console.log("Person's name:", person.name);
